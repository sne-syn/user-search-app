import React from "react";
import Avatar from "./Avatar";
import { render, screen } from "@testing-library/react";
const SRC = "https://avatars.githubusercontent.com/u/583231?v=3";
test("renders avatar", () => {
  render(<Avatar src={SRC} />);
  expect(screen.findByTestId("avatar")).toBeInTheDocument;
  expect(screen.findByTestId("avatar")).toMatchSnapshot;
});
