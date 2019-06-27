package models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * A model representing a lottery ticket
 */
public class Ticket {
    private String id;

    private List<int[]> lines;

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

    public Ticket(int[] line) {
        this();
        this.lines.add(line);
    }

    public String getId() {
        return id;
    }

    public List<int[]> getLines() {
        return lines;
    }

    public void addLine(int[] line) {
        this.lines.add(line);
    }
}
