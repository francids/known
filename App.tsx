import "uno.css";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Layout from "./layouts/Layout";

import NotFound from "./pages/NotFound";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={Layout}>
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!
);
