import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { prerenderRoutes, absoluteUrl } from "./content/meta";
export { profile, SITE_URL } from "./content/profile";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export function render(url: string) {
  const location = basename === "/" ? url : `${basename}${url}`;
  return renderToString(
    <React.StrictMode>
      <StaticRouter basename={basename} location={location}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
