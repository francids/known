import "uno.css";
import { render } from "solid-js/web";
import type { Component } from "solid-js";
import { Router, RouteSectionProps, Route } from "@solidjs/router";

import NotFound from "./pages/NotFound";

const App: Component<RouteSectionProps> = (props) => {
  return <>{props.children}</>;
};

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!
);
