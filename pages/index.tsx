//JS version ==> show Loading fail

import Head from "next/head";
import Seo from "../components/Seo";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Home({results}:any) {
  const router = useRouter();
  const onClick = (id:string,title:string) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
      query: {
        title:title,
      },
    },//URL에 대한 정보를 설정해주는 부분
      `movies/${title}/${id}`, //브라우저에 보이는 URL 마스킹
      );
  }
  return (
    <div className={"container"}>
      <Seo title="home"/>
      {results?.map((movie: any) => (
          <div key={movie.id} className={"movie"} onClick={()=>onClick(movie.id,movie.original_title)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h4>
              <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                <a>
                  {movie.original_title},
                </a>
              </Link>
            </h4>
        </div>
          ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          background-color: #171616;
        }

        .movie {
          cursor: pointer;
          width: 270px;
          height: 500px;
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
  const {results} = await(await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
} //백엔드(서버)에서만 실행됨
