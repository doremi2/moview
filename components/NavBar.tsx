import Link from 'next/link'
import {useRouter} from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>

      <Link href={"/"}>
        <a>
          <div className={"main-banner"}>
            <h1 className={"shadow font-showcard"}>Mo.View</h1>
          </div>
        </a>
      </Link>

      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/genre">
          <a className={router.pathname === "/genre" ? "active" : ""}>Genre</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: #171717;
        }

        .main-banner {
          width: 650px;
          height: 100px;
          background-image: url("/navbanner.jpg");
        }


        nav a {
          font-weight: 1000;
          font-size: 25px;
          color: #bdbcbc;
          margin-left: 20px;
        }

        nav .active {
          color: #bf091b;
        }

        nav div {
          display: flex;
          gap: 10px;
        }

        h1 {
          color: black;
          text-shadow: -2px 0 gray, 0 2px gray, 2px 0 white, 0 -2px white;
          font-size: 40px;
          font-weight: 500;
          margin-left: 20px;
          margin-top: 25px;
        }
      `}</style>
    </nav>
  );

}