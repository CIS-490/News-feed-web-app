import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { Tabs } from "../components/Tabs";

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs initialTab={query}>
          <div label="Top Headlines">
            <h2>Top Headlines</h2>
          </div>
          <div label="Everything">
            <h2>Everything</h2>
          </div>
          <div label="Buisness">
            <h2>Buisness</h2>
          </div>
          <div label="Entertainment">
            <h2>Entertainment</h2>
          </div>
          <div label="General">
            <h2>General</h2>
          </div>
          <div label="Health">
            <h2>Health</h2>
          </div>
          <div label="Science">
            <h2>Science</h2>
          </div>
          <div label="Sports">
            <h2>Sports</h2>
          </div>
          <div label="Technology">
            <h2>Technology</h2>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

Home.getInitialProps = ({ query }) => {
  return { query };
};