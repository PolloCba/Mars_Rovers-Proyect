/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import Cameras from "./Cameras";

test("Must have the word camera", () => {
  const camera = {
    content: "camera",
  };
  const view = render(<Cameras />);
  expect(view.container).toHaveTextContent(camera.content);
});

describe("Cameras", () => {
  it("Must display a title", () => {
    render(<Cameras />);
    expect(screen.queryByText(/choose a camera/i)).toBeInTheDocument();
  });
});
