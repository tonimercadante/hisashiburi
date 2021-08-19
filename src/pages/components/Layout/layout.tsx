import { ReactNode } from "react";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
import Head from "next/head";

type layoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda&family=Inter&family=Poppins"
          rel="stylesheet"
        />
      </Head>
      {/* <NavBar /> */}
      {children}
      <HomePage />
    </>
  );
}

