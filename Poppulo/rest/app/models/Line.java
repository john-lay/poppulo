package models;

public class Line {

    private final int[] numbers;

    private int result;

    public Line(int[] numbers, int result) {
        this.numbers = numbers;
        this.result = result;
    }

    public int[] getNumbers() {
        return numbers;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }
}
