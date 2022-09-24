import "react-toastify/dist/ReactToastify.css";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  // isLoading useState
  const [isLoading, setIsLoading] = useState(false);
  const processed = inputValue.split(",").join("").replace(/ /g, "");
  return (
    <div className={styles.container}>
      <Head>
        <title>Traffic Ticket X</title>
        <meta
          name="description"
          content="Get traffic ticket number from iPhone text scan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Traffic Ticket X</a>
        </h1>
        <h2>Get traffic ticket number from iPhone text scan</h2>

        <p className={styles.description}>
          <label>Input</label>
          <input
            style={{ marginLeft: "1rem" }}
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
        </p>
        <p className={styles.description}>
          <label>Output</label>
          <button
            className={styles.btn}
            onClick={() => {
              // paste inputValue to clipboard
              setIsLoading(true);

              navigator.clipboard.writeText(processed).then(() => {
                setIsLoading(false);
                toast.success(`🦄 Copied ${processed} to clipboard!`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}
          >
            {isLoading ? "Copying..." : processed}
          </button>
        </p>
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <ToastContainer limit={3} />
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
