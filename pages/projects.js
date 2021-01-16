import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static async getInitialProps() {
    const res = await fetch('https://my-json-server.typicode.com/milcahhalili/projects.json/projects')
    const data = await res.json()
    return {
      projects: data
    }
  }

  render() {
    const projects = this.props
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
}