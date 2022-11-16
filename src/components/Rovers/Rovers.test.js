/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import Rovers from "./Rovers";

test("Must have the word rover", () => {
  const rover = {
    content: "rover",
  };
  const view = render(<Rovers />);
  expect(view.container).toHaveTextContent(rover.content);
});

describe("Rovers", () => {
  it("Must display a title", () => {
    render(<Rovers />);
    expect(screen.queryByText(/choose a rover/i)).toBeInTheDocument();
  });
});
