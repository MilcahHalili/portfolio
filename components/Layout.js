import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
          {props.title}
        </h1>

        {props.description ? (
          <p className={styles.description}>
            <code className={styles.code}>{props.description}</code>
          </p>
        ) : ''}

        {props.children}
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