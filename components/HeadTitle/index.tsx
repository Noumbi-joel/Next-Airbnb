import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const HeadTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTitle;
