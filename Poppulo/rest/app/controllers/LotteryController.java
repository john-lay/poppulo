package controllers;

import models.Line;
import models.Ticket;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.*;
import java.util.stream.Collectors;

/**
 * This controller contains a set of actions to handle HTTP requests
 * to the application's lottery tickets.
 */
public class LotteryController extends Controller {

    private final List<Ticket> tickets = new ArrayList<>();

    private final static Random random = new Random();

    /**
     * Lists all lottery tickets
     * <p>
     * Example: curl -X GET http://localhost:9000/ticket
     *
     * @return A http 200 response with a body containing all tickets as json
     */
    public Result allTickets() {
        return ok(Json.toJson(this.tickets.toString()))
                .as("application/json");
    }

    /**
     * Generate a new ticket and add it to the collection of tickets
     * <p>
     * Example (with 3 lines): curl -X POST http://localhost:9000/ticket/3
     *
     * @param numberOfLines the number of lines to add to the ticket
     * @return A http 200 response with a body containing the new ticket
     */
    public Result createTicket(int numberOfLines) {

        if (this.validateNumberOfLines(numberOfLines).isPresent()) {
            return this.validateNumberOfLines(numberOfLines).get();
        }

        Ticket t = new Ticket();
        this.addLines(t, numberOfLines);
        this.tickets.add(t);

        return ok(Json.toJson(t).toString())
                .as("application/json");
    }

    /**
     * Searches the collection of tickets using the ticket ID as the key
     * <p>
     * Example: curl -X GET http://localhost:9000/ticket/3d8df83f-3b08-479b-b4ac-2aa542de0b58
     *
     * @param id the ticket to search for
     * @return if a corresponding ticket is found a http 200 response with a body containing the ticket,
     * otherwise a http 400 (not found) is returned
     */
    public Result findTicket(String id) {
        Optional<Ticket> maybeTicket = this.searchTicketsById(id);
        if (maybeTicket.isPresent()) {
            return ok(Json.toJson(maybeTicket).toString())
                    .as("application/json");
        }

        return notFound("Could not find specified ticket");
    }

    /**
     * Adds the specified number of lines to the lottery ticket
     * <p>
     * Example (adding 3 lines): curl -X PUT http://localhost:9000/ticket/3d8df83f-3b08-479b-b4ac-2aa542de0b58/3
     *
     * @param id            the lottery ticket to modify
     * @param numberOfLines the number of lines to add to the ticket
     * @return if a corresponding ticket is found a http 200 response with a body containing the modified ticket,
     * otherwise a http 400 (not found) is returned
     */
    public Result addLines(String id, int numberOfLines) {

        if (this.validateNumberOfLines(numberOfLines).isPresent()) {
            return this.validateNumberOfLines(numberOfLines).get();
        }

        Optional<Ticket> maybeTicket = this.searchTicketsById(id);
        if (maybeTicket.isPresent()) {
            if (maybeTicket.get().isAmended()) {
                return forbidden("Not allowed to amend ticket");
            }

            this.addLines(maybeTicket.get(), numberOfLines);
            this.updateTicket(maybeTicket.get());

            return ok(Json.toJson(maybeTicket).toString())
                    .as("application/json");
        }

        return notFound("Could not find specified ticket");

    }

    /**
     * Checks the status of a ticket for winning lines and marks it as checked
     * <p>
     * Example: curl -X PUT http://localhost:9000/status/3d8df83f-3b08-479b-b4ac-2aa542de0b58
     *
     * @param id the lottery ticket to check
     * @return if a corresponding ticket is found a http 200 response with a body containing the modified ticket,
     * otherwise a http 400 (not found) is returned
     */
    public Result status(String id) {
        Optional<Ticket> maybeTicket = this.searchTicketsById(id);
        if (maybeTicket.isPresent()) {
            if (!maybeTicket.get().isAmended()) {
                maybeTicket.get().setAmended(true);
                this.checkTicket(maybeTicket.get());
                this.sortResults(maybeTicket.get());
                this.updateTicket(maybeTicket.get());
            }

            return ok(Json.toJson(maybeTicket).toString())
                    .as("application/json");
        }

        return notFound("Could not find specified ticket");
    }

    /**
     * Generates a new line consisting of 3 random integers between 0 and 2 inclusive
     *
     * @return an array of 3 numbers, with each element being 0, 1 or 2
     */
    private int[] newLine() {
        return new int[]{
                random.nextInt(3),
                random.nextInt(3),
                random.nextInt(3)
        };
    }

    /**
     * Searches the collection of tickets for a ticket with the given ID
     *
     * @param id The ticket to look for
     * @return an option of the requested ticket
     */
    private Optional<Ticket> searchTicketsById(String id) {
        return this.tickets.stream()
                .filter(ticket -> ticket.getId().equals(id))
                .findAny();
    }

    /**
     * Adds a specified number of lines to the ticket
     *
     * @param ticket        the lottery ticket to modify
     * @param numberOfLines the number of lines to add to the ticket
     */
    private void addLines(Ticket ticket, int numberOfLines) {
        for (int i = 0; i < numberOfLines; i++) {
            int[] line = this.newLine();
            ticket.addLine(line);
        }
    }

    /**
     * Update the collection of tickets to reflect the change in a ticket
     *
     * @param ticket the updated ticket
     */
    private void updateTicket(Ticket ticket) {
        Optional<Ticket> toRemove = this.searchTicketsById(ticket.getId());

        toRemove.ifPresent(foundTicket -> {
            this.tickets.remove(foundTicket);
            this.tickets.add(ticket);
        });
    }

    /**
     * Calculates whether the lines in a ticket are winning lines
     *
     * @param ticket the ticket to check
     */
    private void checkTicket(Ticket ticket) {
        List<Line> lines = ticket.getLines();

        for (Line line : lines) {
            if (line.getNumbers()[0] + line.getNumbers()[1] + line.getNumbers()[2] == 2) {
                line.setResult(Ticket.RESULT_EQUAL_TWO);
            } else if ((line.getNumbers()[0] == line.getNumbers()[1]) && (line.getNumbers()[0] == line.getNumbers()[2])) {
                line.setResult(Ticket.RESULT_ALL_SAME);
            } else if ((line.getNumbers()[0] != line.getNumbers()[1]) && (line.getNumbers()[0] != line.getNumbers()[2])) {
                line.setResult(Ticket.RESULT_UNIQUE_FIRST);
            } else {
                line.setResult(Ticket.RESULT_DEFAULT);
            }
        }
    }

    /**
     * Takes a ticket and sorts them by line result
     *
     * @param ticket the ticket to sort
     */
    private void sortResults(Ticket ticket) {
        ticket.setLines(ticket.getLines().stream()
                .sorted(Comparator.comparing(Line::getResult).reversed())
                .collect(Collectors.toList()));
    }

    /**
     * Validate the user input when supplying lines
     *
     * @param numberOfLines the number of lines to verify
     * @return An option of a Result or an empty option when there are no errors
     */
    private Optional<Result> validateNumberOfLines(int numberOfLines) {
        if (numberOfLines <= 0) {
            return Optional.of(badRequest("Please ensure the number of lines is a positive number"));
        }

        return Optional.empty();
    }
}
