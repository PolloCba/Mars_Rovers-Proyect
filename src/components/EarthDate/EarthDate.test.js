/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import EarthDate from "./EarthDate";

test("Must have the word Date", () => {
  const date = {
    content: "Date",
  };
  const view = render(<EarthDate />);
  expect(view.container).toHaveTextContent(date.content);
});

describe("EarthDate", () => {
  it("Must display a title", () => {
    render(<EarthDate />);
    expect(screen.queryByText(/select a date/i)).toBeInTheDocument();
  });
});
