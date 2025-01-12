import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? "none" : "block",
          }}
        >
          <p>Hi, my name is</p>
          <h1 className="text-success">Victor M. Mendiola Lau</h1>
          <p>
            I am a{" "}
            <span className="text-warning">
              Senior Software Engineer
            </span>{" "}
            passionate about technology and meaningful{" "}
            <span className="text-danger">projects</span>.
          </p>
          <SocialLinks />
          <p>
            <a href="#main">
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                whoami<span className="pl-1 animate-pulse">▎</span>
              </button>
            </a>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="border-0 border-b-4 border-solid border-success">
            Who am I
          </h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Hi</h2>
            <p>
              🇨🇺 I am Victor, a Software Engineer and Researcher
              based in the US.
            </p>
            <p>
              🚀 I really enjoy working on architecture, infrastructure and
              applications driving{" "}
              <Link to={useBaseUrl("projects/")}>
              impactful projects
              </Link>
              .
            </p>
            <p>
             💻 I believe Technology is the most extraordinary tool we have at our
             disposal to drive progress on Earth 🌏.
            </p>
            <p>
              👨‍💻 I have been writing code and working in
              Software Engineering since 2013.
            </p>
            <p>
              🎒 Holder of a{" "}
              <a href="https://matcom.uh.cu/pregrado/carrera/1796-2/">
                BSc. in Computer Science at Havana's University
              </a>{" "} (2008 - 2013)
              and a{" "}
              <a href="https://eps.ujaen.es/masteres-oficiales/master-universitario-en-seguridad-informatica">
                MSc. in Cybersecurity at University of Jaén
              </a>{" "}(2019 - 2021).
            </p>
            <p>
              🧑‍🏫 Back then, I was first an Undergrad Teaching Assistant
              of Programming and later a Teaching Assistant of Calculus.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Refer to</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={"https://github.com/ryuzakyl/curriculum-vitae/releases/download/1.4.10/cv-en-industry-succinct.pdf"}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
