import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Listage from "../components/Listage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Book Explorer</title>
        <meta name="description" content="Book Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Listage />
    </div>
  );
};

export default Home;
