/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import EarthDate from "./EarthDate";

test("Must have the word Date", () => {
  const date = {
    content: "Date",
  };
  const view = render(<EarthDate note={date} />);
  expect(view.container).toHaveTextContent(date.content);
});
