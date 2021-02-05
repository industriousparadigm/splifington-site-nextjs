import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitch,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Splifington</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          className="logo"
          src="/splifington-logo.png"
          alt="splifington logo"
        />
        <h1 className="rainbow-text">Coming soon</h1>
        <ul className="social-icons">
          <li>
            <a href="" className="social-icon">
              {" "}
              <FontAwesomeIcon
                className="fa-social-icon fa-facebook"
                icon={faFacebook}
              />
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              {" "}
              <FontAwesomeIcon
                className="fa-social-icon fa-youtube"
                icon={faYoutube}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitch.tv/splifington"
              target="_blank noopener noreferrer"
              className="social-icon"
            >
              {" "}
              <FontAwesomeIcon
                className="fa-social-icon fa-twitch"
                icon={faTwitch}
              />
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        {`Copyright © ${new Date().getFullYear()} Splifington`}
      </footer>
    </div>
  );
}
