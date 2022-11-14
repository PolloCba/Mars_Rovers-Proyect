/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
// import { prettyDOM } from "@testing-library/react";
import NavBar from "./Navbar";

test("Must have the word Mars", () => {
  const navBar = {
    content: "Mars",
  };
  const view = render(<NavBar note={navBar} />);
  expect(view.container).toHaveTextContent(navBar.content);
});
