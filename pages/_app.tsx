import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import {useRouter} from "next/router"; //적용 가능
import * as common from "../components/common";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const detailMovie = (movie: any) => {
    router.push({
        pathname: `/movies/${movie.title}/${movie.id}`,
        query: {
          imgpath: movie.backdrop_path,
          overview: movie.overview
        },
      },//URL에 대한 정보를 설정해주는 부분
      `movies/${movie.title}/${movie.id}`, //브라우저에 보이는 URL 마스킹
    );
  }

  return (
    <>
      <Layout />
      <div className={"container"}>
        <Component {...pageProps} />
      </div>
    </>
  )
}