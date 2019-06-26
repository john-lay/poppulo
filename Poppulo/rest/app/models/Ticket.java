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

    private boolean ammended;

    public boolean isAmmended() {
        return ammended;
    }

    public void setAmmended(boolean ammended) {
        this.ammended = ammended;
    }

    public Ticket() {
        this.id = UUID.randomUUID().toString();
        this.lines = new ArrayList<>();
        this.ammended = false;
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
