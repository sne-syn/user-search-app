import React from "react";
import Container from "./Container";
import { render, screen } from "@testing-library/react";

describe("Container", () => {
  test("renders with text content", () => {
    render(
      <Container>
        <div></div>
      </Container>
    );
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toMatchSnapshot();
  });

  test("renders with style provided", () => {
    render(
      <Container style={{ border: "1px solid black" }}>
        <div></div>
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveStyle(
      "border: 1px solid black"
    );
    expect(screen.getByTestId("container")).toMatchSnapshot();
  });
});
