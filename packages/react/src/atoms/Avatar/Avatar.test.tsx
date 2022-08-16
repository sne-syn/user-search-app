import React from "react";
import Avatar from "./Avatar";
import { render, screen } from "@testing-library/react";
const SRC = "https://avatars.githubusercontent.com/u/583231?v=3";

describe("Avatar", () => {
  test("renders avatar", () => {
    render(<Avatar src={SRC} alt="" />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument;
    expect(screen.getByTestId("avatar")).toMatchSnapshot();
  });

  test("renders avatar with style provided", () => {
    render(<Avatar src={SRC} alt="" style={{ width: "100px" }} />);
    expect(screen.getByTestId("avatar")).toHaveStyle("width: 100px");
    expect(screen.getByTestId("avatar")).toMatchSnapshot();
  });
});
