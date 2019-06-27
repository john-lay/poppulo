package controllers;

import org.junit.Test;
import play.Application;
import play.inject.guice.GuiceApplicationBuilder;
import play.mvc.Http;
import play.mvc.Result;
import play.test.WithApplication;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static play.mvc.Http.Status.OK;
import static play.test.Helpers.*;

public class LotteryControllerTest extends WithApplication {

    @Override
    protected Application provideApplication() {
        return new GuiceApplicationBuilder().build();
    }

    @Test
    public void AllTickets_ShouldReturnHttp200_WhenAValidRequestIsMade() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(GET)
                .uri("/ticket");

        Result result = route(app, request);
        assertEquals(OK, result.status());
    }

    @Test
    public void AllTickets_ShouldReturnAnEmptyArray_WhenAValidRequestIsMade() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(GET)
                .uri("/ticket");

        Result result = route(app, request);
        assertTrue(contentAsString(result).contains("[]"));
    }

    @Test
    public void CreateTicket_ShouldReturnHttp200_WhenAValidRequestIsMade() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(POST)
                .uri("/ticket/3");

        Result result = route(app, request);
        assertEquals(OK, result.status());
    }

    @Test
    public void CreateTicket_ShouldReturnHttp400_WhenALetterIsPassedAsTheNumberOfLines() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(POST)
                .uri("/ticket/t");

        Result result = route(app, request);
        assertEquals(BAD_REQUEST, result.status());
    }

    @Test
    public void CreateTicket_ShouldReturnHttp400_WhenANegativeNumberPassedAsTheNumberOfLines() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(POST)
                .uri("/ticket/-1");

        Result result = route(app, request);
        assertEquals(BAD_REQUEST, result.status());
    }

    @Test
    public void CreateTicket_ShouldReturnHttp400_WhenABigNumberPassedAsTheNumberOfLines() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(POST)
                .uri("/ticket/3000000000");

        Result result = route(app, request);
        assertEquals(BAD_REQUEST, result.status());
    }

    @Test
    public void FindTicket_ShouldReturnHttp404_ForAnInvalidTicketId() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(GET)
                .uri("/ticket/3d8df83f-3b08-479b-b4ac-2aa542de0b58");

        Result result = route(app, request);
        assertEquals(NOT_FOUND, result.status());
    }

    @Test
    public void AddLines_ShouldReturnHttp404_ForAnInvalidTicketId() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(PUT)
                .uri("/ticket/3d8df83f-3b08-479b-b4ac-2aa542de0b58/3");

        Result result = route(app, request);
        assertEquals(NOT_FOUND, result.status());
    }

    @Test
    public void AddLines_ShouldReturnHttp400_WhenAnInvalidValueIsPassedAsTheNumberOfLines() {
        Http.RequestBuilder request = new Http.RequestBuilder()
                .method(PUT)
                .uri("/ticket/3d8df83f-3b08-479b-b4ac-2aa542de0b58/t");

        Result result = route(app, request);
        assertEquals(BAD_REQUEST, result.status());
    }
}
