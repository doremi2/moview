import Seo from "../components/Seo";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home({results}: any) {
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
  <div className="main-view">
    <Seo title="home"/>
    <div>
      <input className={"search"} placeholder={"Search Movie ..."}/>
      <button className={"search-btn"}>Search</button>
    </div>
    {results?.map((movie: any) => (
      <div key={movie.id} className={"movie"} onClick={() => detailMovie(movie)}>
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

export async function getServerSideProps() { //다른이름으로 바꾸면 안됨 ! //API Fetch
  const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
} //백엔드(서버)에서만 실행됨
