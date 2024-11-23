import { Component } from "solid-js";

const Toolbar: Component = () => {
  return (
    <header class="container topbar">
      <img src="/favicon.svg" width={40} title="logo" />
      <nav></nav>
    </header>
  );
};

export default Toolbar;
