import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Seo from "../../components/Seo";
import Link from "next/link";
import {DetailMovie} from "../../components/common";

export default function GenreMovie() {
  const [results,setResults] = useState([]);

  const router = useRouter();
  const query = router.query;
  useEffect(()=>{
    (async ()=> {
      const results:any = await (
        await fetch(`/api/genre/${query.genreid}`)
      ).json();
      setResults(results.results);
    })()
  },[]);



  return (
    <div className="main-view">
      <Seo title="home"/>
      <h1>Genre | {query.genrename}</h1>
      {results?.map((movie: any) => (
        <div key={movie.id} className={"movie"} onClick={() => DetailMovie(router,movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h4>
            <Link href={`/movies/${movie.title}/${movie.id}`}>
              <a>
                {movie.title}
              </a>
            </Link>
          </h4>
          <h5>개봉일 | {movie.release_date} &nbsp; &nbsp; 평점 | {movie.vote_average}</h5>
        </div>
      ))}
      <style jsx>{`
        .movie {
          cursor: pointer;
          width: auto;
          height: auto;
          padding-top: 20px;
        }

        .search {
          width: 300px;
          height: 50px;
          font-size: 15px;
          font-weight: bold;
          border: darkred 3px solid;
          background-color: unset;
          padding-left: 10px;
          padding-right: 10px;
        }
        
        input:focus {
          outline: none;
        }

        .search-btn {
          width: auto;
          height: 50px;
          margin-left: 10px;
          padding: 10px;
          background-color: #340f10;
          color: red;
          border: darkred solid 3px;
          font-weight: bold;
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
          font-size: 20px;
          text-align: center;
          font-weight: 900;
        }


      `}</style>
    </div>
  ); //return end;
} //function end;