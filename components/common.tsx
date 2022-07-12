import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const DetailMovie = (router: any, movie: any) => {
  router.push({
      pathname: `http://localhost:3000/movies/${movie.title}/${movie.id}`,
      query: {
        imgpath: movie.backdrop_path,
        overview: movie.overview
      },
    },//URL에 대한 정보를 설정해주는 부분
    `/movies/${movie.title}/${movie.id}`, //브라우저에 보이는 URL 마스킹
  );
}

export function CallAPI(URL: string) {
  const [results, setResults] = useState();
  useEffect(() => {
    (async () => {
      const {results}: any = await (await fetch(URL)).json();
      setResults(results);
    })();
  }, []);
  return results;
}

export {DetailMovie};