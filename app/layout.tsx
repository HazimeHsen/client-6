import type { Metadata } from "next";
import { caveat, asapCondensed } from "./font";
import "./globals.css";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ruby",
  description: "This Is Ruby Official Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asapCondensed.className}>
        <div className="min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
