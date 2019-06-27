package models;

public class Line {

    private int[] numbers;

    private int result;

    public Line(int[] numbers, int result) {
        this.numbers = numbers;
        this.result = result;
    }

    public int[] getNumbers() {
        return numbers;
    }

    public void setNumbers(int[] numbers) {
        this.numbers = numbers;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }
}
