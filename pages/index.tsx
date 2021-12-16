import { GetStaticProps } from "next";

import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.wrapper}>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
    </div>
  </>
);

export default Home;
