/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Rovers from "./Rovers";

test("Must have the word rover", () => {
  const rover = {
    content: "rover",
  };
  const view = render(<Rovers note={rover} />);
  expect(view.container).toHaveTextContent(rover.content);
});
