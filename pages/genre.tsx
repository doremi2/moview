import {useEffect, useState} from "react";
import Seo from "../components/Seo";
import {useRouter} from "next/router";

export default function Genre() {

  const router = useRouter();

  const [genre, setGenre] = useState([]);
  useEffect(() => {
    (async () => {
      const results: any = await (
        await fetch(`/api/genre`)
      ).json();
      setGenre(results.genres);
    })()
  }, []);

  console.log(genre);
  const movePage = (id:string) => {
    router.push({
      pathname: `genre/${id}`,
    },
      )
  }

  return (
    <div className={"main-view"}>
      <Seo title={"genre"}/>
      {genre.map((gen: any) => (
        <div key={gen.id} className={"genre-box"} onClick={()=> movePage(gen.id)}>
          <h3 className={"genre-name"}>{gen.name}</h3>
        </div>
      ))}
      <style jsx>{`
        .genre-name:hover {

        }

        .genre-box:hover {
          transform: scale(1.1) translateY(-5px);
          cursor: pointer;
        }

        .genre-box:hover h3 {
          color: red;
        }
      `}
      </style>
    </div>
  )
}
