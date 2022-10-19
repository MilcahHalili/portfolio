import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Milcah Halili</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
          Milcah Halili
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>dev, director, instructor, writer</code>
        </p>

        <div className="grid">
        <Link href="/projects">
          <div className="card">
            <h3>Projects &rarr;</h3>
            <p>See apps I've built.</p>
          </div>
        </Link>

          <Link href="/about">
            <div className="card">
              <h3>About &rarr;</h3>
              <p>Get to know me.</p>
            </div>
          </Link>

          <Link
            href="/resume"
          >
            <div className="card">
              <h3>Resume &rarr;</h3>
              <p>Learn about my experience.</p>
            </div>
          </Link>

          <a
            href="mailto:code@milcah.dev"
            className="card"
          >
            <h3>Contact &rarr;</h3>
            <p>
              Email me at code[at]milcah[dot]dev.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/milcahhalili">
          <img className={styles.githubIcon} src="https://i.imgur.com/F4OeYPv.png" />
        </a>
        <a href="https://www.linkedin.com/in/milcah-halili/">
          <img className={styles.linkedInIcon} src="https://i.imgur.com/kmInX59.png" />
        </a>
      </footer>
    </div>
  )
}
