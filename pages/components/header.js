import React from "react";
import Head from "next/head";

export default function Header(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/Logo1.png" />
      </Head>
    </div>
  );
}
