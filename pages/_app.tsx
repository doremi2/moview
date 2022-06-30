import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout"; //적용 가능

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout />
      <div className={"container"}>
        <Component {...pageProps} />
      </div>
    </>
  )
}