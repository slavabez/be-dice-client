import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import BeDice from "../components/BeDice";

describe("Basic usability tests", () => {
  afterEach(() => {
    cleanup();
  });

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
});
