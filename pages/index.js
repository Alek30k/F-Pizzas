import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        Homepage
      </Head>
    </div>
  );
}
