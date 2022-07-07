import Head from "next/head";

export default function Seo ({title}:any) {
  return (
    <Head>
      <title>Mo.view | {title} </title>
    </Head>
  );
}