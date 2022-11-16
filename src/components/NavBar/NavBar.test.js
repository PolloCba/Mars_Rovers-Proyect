/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
// import { prettyDOM } from "@testing-library/react";
import NavBar from "./Navbar";

test("Must have the word Mars", () => {
  const navBar = {
    content: "Mars",
  };
  const view = render(<NavBar />);
  expect(view.container).toHaveTextContent(navBar.content);
});

describe("NavBar", () => {
  it("Must display a title", () => {
    render(<NavBar />);
    expect(screen.queryByText(/explore mars/i)).toBeInTheDocument();
  });
});
