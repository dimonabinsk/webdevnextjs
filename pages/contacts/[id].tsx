import { GetServerSideProps } from "next";
import { FC } from "react";

import Head from "next/head";
import Link from "next/link";
import ContactInfo from "../../components/Contactinfo";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType;
};

// SSR request
export const getServerSideProps: GetServerSideProps = async (context) => {
  //console.log(context);
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<contactTypeProps> = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
    <br />
    <Link href="/contacts">
      <a className="arrayLink">&larr; Prev</a>
    </Link>
  </>
);

export default Contact;
