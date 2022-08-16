import React from "react";
import CardSubtitle from "./CardSubtitle";
import { render, screen } from "@testing-library/react";
const CONTENT = "Test CardSubtitle";

describe("CardSubtitle", () => {
  test("renders with text content", () => {
    render(<CardSubtitle content={CONTENT} />);
    expect(screen.getByTestId("card-subtitle")).toHaveTextContent(CONTENT);
    expect(screen.getByTestId("card-subtitle")).toMatchSnapshot();
  });

  test("renders with style provided", () => {
    render(
      <CardSubtitle content={CONTENT} style={{ backgroundColor: "black" }} />
    );
    expect(screen.getByTestId("card-subtitle")).toHaveStyle(
      "backgroundColor: black"
    );
    expect(screen.getByTestId("card-subtitle")).toMatchSnapshot();
  });

  test("renders with custom text color provided", () => {
    render(<CardSubtitle content={CONTENT} color="blue" />);
    expect(screen.getByTestId("card-subtitle")).toHaveStyle("color: blue");
    expect(screen.getByTestId("card-subtitle")).toMatchSnapshot();
  });
});
