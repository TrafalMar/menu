/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import GrassyLink from "../index";

describe("<GrassyLink />", () => {
  afterEach(cleanup);

  it("Empty GrassyLink", () => {
    render(<GrassyLink />);
    expect(screen.getByRole("link")).toHaveTextContent("Link");
  });

  it("GrassyLink with name=Twitch", () => {
    render(<GrassyLink name="Twitch" />);
    expect(screen.getByRole("link")).toHaveTextContent("Twitch");
  });

  it("GrassyLink with name=YouTube", () => {
    render(<GrassyLink name="YouTube" />);
    expect(screen.getByRole("link")).toHaveTextContent("YouTube");
  });
});
