import {useRouter} from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}:any) {
  type data = [
    title : string ,
    id : string
  ]
  const router = useRouter(); //컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행이 된다.
  const [title,id]:data = params;
  return (
    <div>
    <Seo title={title}/> {/*title Name*/}
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps ({params:{params}}:any){ //SEO 최적화에 강력
  //console.log("ctx:",ctx); --> context => 내부에 params 가 있음 △ 함수 내에 넣어줌
  return {
    props: {
      params ,
    },
  }
}