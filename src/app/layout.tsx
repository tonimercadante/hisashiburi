import type { Metadata } from "next";
import { Oxygen, Roboto } from "next/font/google";
import NavBar from "../components/NavBar";
import styles from "./home.module.scss";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hisashiburi - found the episodes your favorite characters appears",
  description: "found the episodes your favorite characters appears",
};

const oxygen = Oxygen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable} ${roboto.variable} `}>
        <NavBar />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
