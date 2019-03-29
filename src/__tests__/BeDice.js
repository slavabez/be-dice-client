import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import BeDice from "../components/BeDice";
import CharacterCreation from "../components/Registration/CharacterCreation";

describe("Basic usability tests", () => {
  test("renders the landing page", () => {
    const app = render(<BeDice />);

    const heading = app.getByTestId("landing-header");
    expect(heading.textContent).toBe("I'm the Landing Page");

    const button = app.getByTestId("landing-button");
    expect(button.textContent).toBe("Let's roll!");
  });

  test("changes the url when clicking character create", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId, queryByTestId } = render(
      <Router history={history}>
        <BeDice />
      </Router>
    );

    // Landing shown, Registration not shown
    expect(getByTestId("landing-section")).toBeInTheDocument();
    expect(queryByTestId("registration-section")).not.toBeInTheDocument();

    // Press the 'Let's roll!' button
    fireEvent.click(getByTestId("landing-button"));
    debugger;

    // Registration shown now
    expect(queryByTestId("landing-section")).not.toBeInTheDocument();
    expect(getByTestId("registration-section")).toBeInTheDocument();
  });

  test.skip("character creating works, colors change", () => {
    const { getByTestId, queryByTestId } = render(<CharacterCreation />);

    // Expect there to be a certain number of colors and avatars
    const avatars = getByTestId("character-avatars");
    const colors = getByTestId("character-colors");

    expect(avatars.childNodes.length).toBe(7);
    expect(colors.childNodes.length).toBe(10);

    // Expect default color, avatar and character name
    const preview = getByTestId("character-preview");

    // Initial color is the first from the list
    expect(preview.children[1].getAttribute("color")).toBe(
      colors.children[0].getAttribute("color")
    );

    // Clicking on a random color will change character preview to that color
    const randomButtonIndex = Math.floor(
      Math.random() * colors.children.length
    );

    fireEvent.click(colors.children[randomButtonIndex]);

    expect(preview.children[1].getAttribute("color")).toBe(
      colors.children[randomButtonIndex].getAttribute("color")
    );
    const style = preview.style;
    debugger;
    expect(preview.style.borderColor).toBe("black");
  });
});
