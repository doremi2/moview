import NavBar from "./NavBar";
import * as common from "../components/common";

export default function Layout({children}:any) {

  return (
    <>
      <NavBar/>
      <div>{children}</div>
    </>
  )
}