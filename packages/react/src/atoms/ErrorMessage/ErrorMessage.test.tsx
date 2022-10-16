import React from "react";
import ErrorMessage from "./ErrorMessage";
import { render, screen } from "@testing-library/react";

const mockErrorMsgContent = "Random error message";
const renderComponent = () => {
  return render(<ErrorMessage content={mockErrorMsgContent} />);
};
describe("ErrorMessage", () => {
  test("renders the component", () => {
    renderComponent();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(mockErrorMsgContent);
    expect(screen.getByRole("heading")).toMatchSnapshot();
  });
});
