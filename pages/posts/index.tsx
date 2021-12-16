import Head from "next/head";
import Link from "next/link";

import Heading from "../../components/Heading";
import style from "../../styles/Post.module.scss";


export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { posts: data }
    };
  };

const Posts = ({posts}) => (
  <>
  <Head>
    <title>Posts</title>
  </Head>
    <Heading text="Posts list:" />
    <ol>
        {posts && posts.map(({id, title}) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>
                    <a className={style.link}>{title}</a>
                </Link>
            </li>
        ))}
    </ol>
  </>
);

export default Posts;