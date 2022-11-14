/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SolDate from "./SolDate";

test("Must have the word sol", () => {
  const sol = {
    content: "sol",
  };
  const view = render(<SolDate note={sol} />);
  expect(view.container).toHaveTextContent(sol.content);
});
