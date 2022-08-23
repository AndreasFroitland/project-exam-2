import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Head />
        <div className="container">
          <h1>Home page</h1>
        </div>
    </Layout>
 );
}