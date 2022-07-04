import {useRouter} from "next/router";
import Seo from "../../components/Seo";
import {useEffect, useState} from "react";

export default function Detail({params}: any) {
  type data = [
    title: string,
    id: string,
  ]
  type reviewData = {
    author: string
    author_details: string;
    content: string;
    created_at: string;
    id: string;
  }
  const router = useRouter(); //컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 된다.
  const query = router.query;
  const [title, id]: data = params;
  const [contentState, setConSate] = useState(false);
  let page = 1;

  const [reviews, setReviews] = useState([]);

  GetReviews(id, 1);

  function GetReviews(id: string, page: number) {
    useEffect(() => {
      (async () => {
        const {results}: any = await (
          await fetch(
            `/api/movies/${id}/review/${page}`
          )
        ).json();
        setReviews(results);
        console.log(reviews);
      })();
    }, []);
  }

  function ShowOrHideContent() {
    setConSate(!contentState);
  }

  return (
    <div className={"detail-movie"} key={id}>
      <Seo title={title}/> {/*title Name*/}
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${query.imgpath}`}/>
      <h2>OVERVIEW</h2>
      <h4>{query.overview}</h4>
      <br/>
      <h2>Review</h2>
      {reviews.map((rev: any) => (
        <div key={rev.id} className={"review-box"}>
          <h4>작성자 |{rev.author_details.name} &nbsp;&nbsp; 평점 | {rev.author_details.rating}</h4>
          <h4>코멘트 <input type={"button"} onClick={() => ShowOrHideContent()} value={contentState?"펼치기":"접기"}/></h4>
          <div className={contentState ? "rev-none" : "rev-show"}>
            <h5>{rev.content}</h5>
          </div>

        </div>
      ))}
      <button className={"back"} onClick={() => history.back()}>이전으로 돌아가기</button>
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

        .review-box {
          border: darkgray 1px solid;
          background-color: dimgrey;
          padding: 10px;
          width: 100%;

        }

        .review-box:last-of-type { //마지막 요소에만 적용
          margin-bottom: 10px;
        }

        .review-box h4, h5 {
          color: black;
        }

        .rev-none {
          display: none;
        }

        .rev-show {
          display: block;
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