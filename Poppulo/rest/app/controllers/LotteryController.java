package controllers;

import models.Ticket;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * This controller contains a set of actions to handle HTTP requests
 * to the application's lottery tickets.
 */
public class LotteryController extends Controller {

    private static final int RESULT_ALL_TWO = 10;
    private static final int RESULT_ALL_SAME = 5;
    private static final int RESULT_UNIQUE_FIRST = 1;
    private static final int RESULT_DEFAULT = 0;
    private List<Ticket> tickets = new ArrayList<>();


    /**
     * Lists all lottery tickets
     *
     * @return A http 200 response with a body containing all tickets as json
     */
    public Result allTickets() {
        return ok(Json.toJson(this.tickets.toString()));
    }

    /**
     * Generate a new ticket and add it to the collection of tickets
     *
     * @param numberOfLines the number of lines to add to the ticket
     * @return A http 200 response with a body containing the new ticket
     */
    public Result createTicket(int numberOfLines) {
        Ticket t = new Ticket();
        for (int i = 0; i < numberOfLines; i++) {
            int[] line = {newTicketNumber(), newTicketNumber(), newTicketNumber()};
            t.addLine(line);
        }
        this.tickets.add(t);

        return ok(Json.toJson(t).toString());
    }

    /**
     * Searches the collection of tickets using the ticket ID as the key
     *
     * @param id the ticket to search for
     * @return if a corresponding ticket is found a http 200 response with a body containing the ticket,
     * otherwise a http 400 (not found) is returned
     */
    public Result findTicket(String id) {
        Ticket t = this.searchTicketsById(id);
        if (t != null) {
            return ok(Json.toJson(t).toString());
        } else {
            return notFound("Could not find specified ticket");
        }
    }

    /**
     * Generates a random integer between 0 and 2 inclusive
     *
     * @return 0, 1 or 2
     */
    private Integer newTicketNumber() {
        Random r = new Random();
        return r.nextInt(3);
    }

    /**
     * Searches the collection of tickets for a ticket with the given ID
     *
     * @param id The ticket to look for
     * @return the requested ticket or null if it cannot be found
     */
    private Ticket searchTicketsById(String id) {
        return this.tickets.stream()
                .filter(ticket -> ticket.getId().equals(id))
                .findAny()
                .orElse(null);
    }
}
