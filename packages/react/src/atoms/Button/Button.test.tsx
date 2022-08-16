import React from "react";
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
const handleClick = jest.fn();

describe("Button", () => {
  test("was rendered", () => {
    render(<Button label="Send" />);
    expect(screen.getByRole("button")).toBeInTheDocument;
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  test("was rendered with style provided", () => {
    render(<Button label="Send" style={{ width: "100px" }} />);
    expect(screen.getByRole("button")).toHaveStyle("width: 100px");
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  test("triggers onClick function by click", () => {
    render(<Button label="Send" handleClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toBeCalledTimes(1);
  });

  test("is disabled", () => {
    render(<Button label="Send" handleClick={handleClick} disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});
