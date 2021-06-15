/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LinkControls from "..";

const openControls = () => {
  fireEvent.click(screen.getByRole("button"));
  expect(screen.queryByRole("controls")).toBeInTheDocument();
};

const closeControls = () => {
  fireEvent.click(screen.getByRole("button"));
  expect(screen.queryByRole("controls")).not.toBeInTheDocument();
};

describe("<LinkControls/>", () => {
  it("is toggling", () => {
    render(<LinkControls />);
    openControls();
    closeControls();
    openControls();
  });
});
