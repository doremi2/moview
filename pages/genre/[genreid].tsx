import {useRouter} from "next/router";

export default function GenreMovie(){

  const router = useRouter();
  const query = router.query;
  console.log(query);

  return(
    <div>
      <h4>dfdd</h4>
    </div>
  );
}