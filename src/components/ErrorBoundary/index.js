import React, { Component } from "react";
import * as Sentry from "@sentry/browser";

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
      return <h1>Error</h1>;
    }

    return this.props.children;
  }
}
