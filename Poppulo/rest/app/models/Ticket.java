package models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * A model representing a lottery ticket
 */
public class Ticket {

    public static final int RESULT_EQUAL_TWO = 10;
    public static final int RESULT_ALL_SAME = 5;
    public static final int RESULT_UNIQUE_FIRST = 1;
    public static final int RESULT_DEFAULT = 0;

    private String id;

    private List<Line> lines;

    private boolean amended;

    public boolean isAmended() {
        return amended;
    }

    public void setAmended(boolean amended) {
        this.amended = amended;
    }

    public Ticket() {
        this.id = UUID.randomUUID().toString();
        this.lines = new ArrayList<>();
        this.amended = false;
    }

    public String getId() {
        return id;
    }

    public List<Line> getLines() {
        return lines;
    }

    public void setLines(List<Line> lines) {
        this.lines = lines;
    }

    public void addLine(int[] line) {
        this.lines.add(new Line(line, RESULT_DEFAULT));
    }
}
