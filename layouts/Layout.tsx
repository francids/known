import { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
