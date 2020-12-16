import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Projects</title>
      </Head>
      <main className="main">
        <h1>Projects</h1>

        <div className="grid">
          <Link href="/projects">
            <div className="card">
              <h3>Project 0 &rarr;</h3>
              <p>See project 0.</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="card">
              <h3>Project 0 &rarr;</h3>
              <p>See project 0.</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="card">
              <h3>Project 0 &rarr;</h3>
              <p>See project 0.</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="card">
              <h3>Project 0 &rarr;</h3>
              <p>See project 0.</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="card">
              <h3>Projects &rarr;</h3>
              <p>See apps I've built.</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="card">
              <h3>Projects &rarr;</h3>
              <p>See apps I've built.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}