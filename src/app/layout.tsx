import MainNavigation from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F4dn-Portfolio",
  description: "Portfolio of Fardeen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=" sticky top-0 z-10">
          <MainNavigation/>
        </header>
        <main>{children}</main>
        <div id="overlays"></div>
      </body>
    </html>
  );
}
