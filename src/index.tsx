import * as React from "react";
import { render } from "react-dom";
import * as Sentry from "@sentry/browser";

import * as serviceWorker from "./serviceWorker";

import BeDiceApp from "./App";

// Initialise Sentry error reporting
Sentry.init({
  dsn: "https://b03e5d3a18cb4239ab50539badad1ac5@sentry.io/1359957"
});

render(<BeDiceApp />, document.getElementById("app"));

serviceWorker.unregister();
