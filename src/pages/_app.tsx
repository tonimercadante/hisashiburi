<<<<<<< HEAD
import type { AppProps } from "next/app";
import Header from "../components/Header";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
=======
import "../styles/globals.scss";
import Layout from "./components/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
>>>>>>> v2
  );
}
export default MyApp;
