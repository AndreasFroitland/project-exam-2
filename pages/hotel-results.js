import Head from "../components/layout/head";
import Layout from "../components/layout/layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Link from 'next/link'

export default function Home(props) {

  return (
    <Layout props={props}>
      <Head />
      <div className="container">
        <h1>Hotels page</h1>
          {props.posts.map((post) => {
            return <div className="container posts"><div key={post.slug}>
              <Link href={`/hotel-details?id=${post.id}`}>
                {post.title.rendered}
              </Link>
                <p>{new Date(post.date).toLocaleString()}</p>
              </div>
            </div>;
        })}
      </div>
    </Layout >
  );
}

export async function getStaticProps() {
  let posts = [];

  try {
    const response = await axios.get(BASE_URL);
    posts = response.data

    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts: []
    }
  }
}