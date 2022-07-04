//JS version ==> show Loading fail

import Head from "next/head";
import Seo from "../components/Seo";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Home({results}: any) {
  console.log(results);
  const router = useRouter();
  const onClick = (movie: any) => {
    console.log(movie);
    router.push({
        pathname: `/movies/${movie.title}/${movie.id}`,
        query: {
          imgpath: movie.poster_path,
          overview: movie.overview
        },
      },//URL에 대한 정보를 설정해주는 부분
      `movies/${movie.title}/${movie.id}`, //브라우저에 보이는 URL 마스킹
    );
  }
  return (
    <div className="main-view">
      <Seo title="home"/>
      {results?.map((movie: any) => (
        <div key={movie.id} className={"movie"} onClick={() => onClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
          <h4>
            <Link href={`/movies/${movie.title}/${movie.id}`}>
              <a>
                {movie.title}
              </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .main-view {
          grid-template-columns: 1fr 1fr;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .movie {
          cursor: pointer;
          width: 300px;
          height: 300px;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: #201f1f 0px 2px 3px 3px;
        }

        .movie:hover img {
          transform: scale(1.10) translateY(-10px);
        }

        .movie h4 {
          font-size: 17px;
          text-align: center;
          color: white;
        }
      `}</style>
    </div>
  ); //return end;
} //function end;

export async function getServerSideProps() { //다른이름으로 바꾸면 안됨 ! //API Fetch
  const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
} //백엔드(서버)에서만 실행됨
