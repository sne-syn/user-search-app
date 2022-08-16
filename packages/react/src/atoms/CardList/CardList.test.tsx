import React from "react";
import CardList from "./CardList";
import { render, screen } from "@testing-library/react";

describe("CardList", () => {
  test("renders card list", () => {
    render(
      <CardList>
        <li>item</li>
      </CardList>
    );
    expect(screen.getByTestId("card-list")).toBeInTheDocument;
    expect(screen.getByTestId("card-list")).toMatchSnapshot();
  });

  test("renders card list with style provided", () => {
    render(
      <CardList style={{ width: "100px" }}>
        <li>item</li>
      </CardList>
    );
    expect(screen.getByTestId("card-list")).toHaveStyle("width: 100px");
    expect(screen.getByTestId("card-list")).toMatchSnapshot();
  });
});
