import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "~/components/MainNavigation";
import MainNavStyles from "./styles/dist/MainNavigation.css";
import homeStyles from "./styles/dist/main.css";
import footerStyles from "./styles/dist/Footer.css";
import FooterSection from "./components/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: MainNavStyles,
  },
  {
    rel: "stylesheet",
    href: homeStyles,
  },
  {
    rel: "stylesheet",
    href: footerStyles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="header">
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer>
          <FooterSection />
        </footer>
        <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error xl:container xl:mx-auto flex items-center justify-center flex-col">
          <h1>An error occurred!</h1>
          <button className="full-btn  py-4 px-6 text-base font-normal">
            <Link to='/'>Back to Safety!</Link>
          </button>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
