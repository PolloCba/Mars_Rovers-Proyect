/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import SolDate from "./SolDate";

test("Must have the word sol", () => {
  const sol = {
    content: "sol",
  };
  const view = render(<SolDate />);
  expect(view.container).toHaveTextContent(sol.content);
});

describe("SolDate", () => {
  it("Must display a title", () => {
    render(<SolDate />);
    expect(screen.queryByText(/select a sol/i)).toBeInTheDocument();
  });
});
