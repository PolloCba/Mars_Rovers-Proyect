/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Cameras from "./Cameras";

test("Must have the word camera", () => {
  const camera = {
    content: "camera",
  };
  const view = render(<Cameras note={camera} />);
  expect(view.container).toHaveTextContent(camera.content);
});
