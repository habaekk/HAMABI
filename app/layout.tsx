import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAMABI",
  description: "Your daily friend Hamabi",
  icons: {
		icon: "/favicon.ico",
	},
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="app-container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}