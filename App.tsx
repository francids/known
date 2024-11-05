import "uno.css";
import { render } from "solid-js/web";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <p>...</p>
    </>
  );
};

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <App />, root!);
