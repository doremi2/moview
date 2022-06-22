//JS version ==> show Loading fail

import Head from "next/head";
import Seo from "../components/Seo";
import {useEffect, useState} from "react";
import Link from "next/link";



export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [isMouseOver, setMouseOver] = useState(false);
  useEffect(() => {
    //fetch(`https://api.themoviedb.org/3/movie/popularapi_key=${API_KEY}`)
    (async () => {
      const {results} = await (
        await fetch(
          `/api/movies`
          )
          ).json();
          setMovies(results);
        })();
      }, []);

  function showVideo(id:string){

  }
  function resetImage(){

    }

  return (
    <div className={"container"}>
      <Seo title="home"/>
        {movies?.map((movie:any) => (
          <div key={movie.id} className={"movie"} onMouseOver={()=> showVideo(movie.id)} onMouseOut={()=>resetImage()}>
            { isMouseOver?
              (<h1>Video</h1>):(<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>)
            }
            <h4>
              <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                <a>{movie.original_title}</a>
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
          height:500px;
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
          font-size: 18px;
          text-align: center;
          color: white;
        }
      `}</style>
    </div>
  ); //return end;
} //function end;

