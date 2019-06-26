package controllers;

import models.Ticket;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class LotteryController extends Controller {

    private static final int RESULT_ALL_TWO = 10;
    private static final int RESULT_ALL_SAME = 5;
    private static final int RESULT_UNIQUE_FIRST = 1;
    private static final int RESULT_DEFAULT = 0;
    private List<Ticket> tickets = new ArrayList<>();

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok("{\"hello\":" + newTicketNumber() + "}").as("application/json");
    }

    private Integer newTicketNumber() {
        Random r = new Random();
        return r.nextInt(3);
    }

    public Result createTicket() {
        int[] row = {newTicketNumber(), newTicketNumber(), newTicketNumber()};
        Ticket t = new Ticket(row);
        this.tickets.add(t);

        return ok(Json.toJson(t).toString());
    }

    public Result findTicket(String id) {
        Ticket t = this.searchTicketsById(id);
        if (t != null) {
            return ok(Json.toJson(t).toString());
        } else {
            return notFound("Could not find specified ticket");
        }
    }

    private Ticket searchTicketsById(String id) {
        return this.tickets.stream()
                .filter(ticket -> ticket.getId().equals(id))
                .findAny()
                .orElse(null);
    }
}
