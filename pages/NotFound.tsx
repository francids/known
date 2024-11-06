import type { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

const NotFound: Component<RouteSectionProps> = () => {
  return (
    <p class="font-medium text-base">
      The page <code>{window.location.pathname}</code> was not found.
    </p>
  );
};

export default NotFound;
