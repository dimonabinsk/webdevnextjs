import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <>
      <div className={styles.wrapper}>
        <Head>
          <title>Error</title>
        </Head>
        <div>
          <Heading text="Error 404" />
          <Heading
            tag="h2"
            text="Something went wrong, there is no such page"
          />
        </div>
      </div>
    </>
  );
};

export default Error;
