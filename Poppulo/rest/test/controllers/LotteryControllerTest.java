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
}
