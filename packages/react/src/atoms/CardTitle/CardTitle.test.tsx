import React from "react";
import CardTitle from "./CardTitle";
import { render, screen } from "@testing-library/react";
const CONTENT = "Test CardTitle";

describe("CardTitle", () => {
  test("renders with text content", () => {
    render(<CardTitle content={CONTENT} />);
    expect(screen.getByTestId("card-title")).toHaveTextContent(CONTENT);
    expect(screen.getByTestId("card-title")).toMatchSnapshot();
  });

  test("renders with style provided", () => {
    render(
      <CardTitle content={CONTENT} style={{ backgroundColor: "black" }} />
    );
    expect(screen.getByTestId("card-title")).toHaveStyle(
      "backgroundColor: black"
    );
    expect(screen.getByTestId("card-title")).toMatchSnapshot();
  });
});
