import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import globalStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: globalStyles }];
}

export const meta: MetaFunction = () => {
  const description = `Developing layout animations without depleting my API quota, using Remix, Framer, and StepZen.`;
  return {
    description,
    keywords: "Remix,StepZen,YouTube,Framer,AnimatePresence,Resource Routes,Layout Animations",
    "twitter:image": "https://raw.githubusercontent.com/januff/stepzen-youtube-data-api/main/images/chromeView.jpg",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@metagurudotguru",
    "twitter:site": "@metagurudotguru",
    "twitter:title": "Animating API Results (On A Budget)",
    "twitter:description": description,
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
