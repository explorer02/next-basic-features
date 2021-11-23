import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dog from "../public/assets/dog.jpeg";

const Home: NextPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <h1>Home</h1>
      <Image src="/assets/dog.jpeg" alt="" height={500} width={500} />
      <p> Hello this is a text</p>
    </div>
  );
};

export default Home;
