package models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Ticket {
    private String id;

    private List<int[]> lines;

    public Ticket() {
        this.id = UUID.randomUUID().toString();
        this.lines = new ArrayList<>();
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
