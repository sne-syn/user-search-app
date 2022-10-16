import React from "react";
import DefinitionList from "./DefinitionList";
import { render, screen } from "@testing-library/react";

const mockList = { books: 8, followers: 3938, readers: 9 };

const renderComponent = () => {
  return render(<DefinitionList list={mockList} />);
};

describe("DefinitionList", () => {
  test("renders with date on human readable format", () => {
    renderComponent();
    expect(screen.getByTestId("definition-list")).toBeInTheDocument();
    expect(screen.getByTestId("definition-list")).toMatchSnapshot();
  });
  test("renders the right amount of definitions", () => {
    renderComponent();
    const definitionItems = screen.getAllByTestId("definition-item");
    expect(definitionItems).toHaveLength(Object.keys(mockList).length);
  });
});
