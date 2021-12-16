import { GetStaticProps } from "next";
import { FC } from "react";


import Head from "next/head";
import Link from "next/link";
import { contactType } from "../../types";
import Heading from "../../components/Heading";
import style from "../../styles/Contacts.module.scss";

type contactsTypeProps = {
  contacts: [contactType];
};

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts:FC<contactsTypeProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contact list:" />
      <ol>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <a className={style.link}>{name}</a>
              </Link>
            </li>
          ))}
      </ol>
    </>
  );
};

export default Contacts;
