import Head from "next/head";
import Nav from "../components/layout/nav";

export default function Home() {
  return (
    <Nav>
      <Head />
        <div className="container">
          <h1>Home page</h1>
        </div>
    </Nav>
 );
}