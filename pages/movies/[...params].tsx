import {useRouter} from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}: any) {
  type data = [
    title: string,
    id: string,
  ]
  const router = useRouter(); //컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 된다.
  const query = router.query;
  const [title, id]: data = params;
  return (
    <div className={"detail-movie"} key={id}>
      <Seo title={title}/> {/*title Name*/}
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${query.imgpath}`}/>
      <h2>OVERVIEW</h2>
      <h4>{query.overview}</h4>
      <button className={"back"}>이전으로 돌아가기</button>
      <style jsx>{`
        .detail-movie {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: #171717;
        }

        img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: #201f1f 0px 2px 3px 3px;
          align-items: center;
        }

        h2 {
          color: black;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #891015;
        }
        .back {
        background-color: darkred;
        font-size: 18px;
        padding: 10px;
        width: 500px;
        color: white;
        }
      `}

      </style>
    </div>
  );
}

export function getServerSideProps({params: {params}}: any) { //SEO 최적화에 강력
  //console.log("ctx:",ctx); --> context => 내부에 params 가 있음 △ 함수 내에 넣어줌
  return {
    props: {
      params,
    },
  }
}