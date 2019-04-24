import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import * as serviceWorker from "./serviceWorker";

// Initialise Sentry error reporting
Sentry.init({
  dsn: "https://b03e5d3a18cb4239ab50539badad1ac5@sentry.io/1359957"
});

ReactDOM.render(<div />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
