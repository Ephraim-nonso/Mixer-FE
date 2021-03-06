import Head from "next/head";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Why from "../components/why/Why";
import How from "../components/works/How";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mixer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <How />
        <Why />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
