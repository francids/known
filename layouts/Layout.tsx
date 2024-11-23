import type { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

import Topbar from "../components/Topbar";

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <>
      <Topbar />
      <main class="container">{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
