import Head from "next/head";
import React from "react";

function Header(props) {
  return (
    <>
      <Head>{props.page}</Head>
    </>
  );
}

export default Header;
