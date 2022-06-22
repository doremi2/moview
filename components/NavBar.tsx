import Link from 'next/link'
import styles from "./NavBar.module.css";
import {useRouter} from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <img src="/movies-icon1.png"/>
        <h1>𝕄𝕠.𝕍𝕚𝕖𝕨</h1>
      </div>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/search">
          <a className={router.pathname === "/Search" ? "active" : ""}>Search</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: #171717;
        }

        img {
          max-width: 100px;
          height: 90px;
          margin-bottom: 10px;
        }

        nav a {
          font-weight: 1000;
          font-size: 25px;
          font-family: "Anonymous Pro";
          color: #bdbcbc;
          margin-left: 20px;
        }

        nav .active {
          color: darkred;
        }

        nav div {
          display: flex;
          gap: 10px;
        }
        
        h1{
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