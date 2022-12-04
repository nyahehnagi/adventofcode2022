import { render } from "@testing-library/react";
import React from "react";
import RPS from "./RPSGame";

describe("Rock Paper Scissors", () => {
  it("should render", () => {
    const mockData: string = "A Z\nB X\nC Y";
    const { container } = render(<RPS data={mockData} />);
    expect(container).toBeTruthy();
  });

  it("it should render the total score for Part 1", () => {
    const mockData: string = "A Z\nB X\nC Y";
    const { container } = render(<RPS data={mockData} />);
    expect(container.textContent).toContain("6");
  });

  it("it should render the total score for Part 2", () => {
    const mockData: string = "A Y\nB X\nC Z";
    const { container } = render(<RPS data={mockData} />);
    expect(container.textContent).toContain("12");
  });
});
