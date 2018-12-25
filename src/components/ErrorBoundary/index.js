import React, { Component } from "react";
import styled from "styled-components";
import * as Sentry from "@sentry/browser";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin: 0.5rem 2rem;
  }
`;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedErrorFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // TODO: log the error here
    Sentry.withScope(scope => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      // Render error UI
      return (
        <ErrorWrapper>
          <h1>Sorry, looks like we have an error</h1>
          <p>
            Unfortunately BE-Dice wasn't able to recover from the error. Try
            reloading the page.
          </p>
          <p>
            The developer has been automatically notified about this error, but
            feel free to report it on{" "}
            <a
              href="https://github.com/slavabez/be-dice-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}
