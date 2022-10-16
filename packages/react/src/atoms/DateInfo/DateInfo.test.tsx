import React from "react";
import DateInfo from "./DateInfo";
import { render, screen } from "@testing-library/react";

const renderComponent = (date: string | null) => {
  return render(<DateInfo date={date} />);
};
describe("DateInfo", () => {
  test("renders with date on human readable format", () => {
    renderComponent("2008-01-14T04:33:35Z");
    expect(screen.getByTestId("date-info")).toBeInTheDocument();
    expect(screen.getByTestId("date-info")).toHaveTextContent("1 Jan 2008");
    expect(screen.getByTestId("date-info")).toMatchSnapshot();
  });
  test("doesn't render if the date is absent", () => {
    renderComponent("");
    expect(screen.queryByTestId("date-info")).not.toBeInTheDocument();
    expect(screen.queryByTestId("date-info")).toMatchSnapshot();
  });
});
