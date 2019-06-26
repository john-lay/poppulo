package controllers;

import play.mvc.*;

import java.util.Random;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class LotteryController extends Controller {

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

}
