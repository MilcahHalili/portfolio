import React, { Component } from 'react'
import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: {
        props
      }
    }
  }
  
  render() {
    const projects = this.state.projects.props.projects
    return (
      <div className="container">
        <Head>
          <title>Projects</title>
        </Head>
        <main className="main">
          <h1>Projects</h1>
  
          <div className="grid">
            {projects.map(project => {
              return <ProjectCard
                project={project}
                key={project.id}
              />
            })}
          </div>
        </main>
      </div>
    )
  }
}


export const getStaticProps = async () => { 
  const res = await fetch('https://my-json-server.typicode.com/milcahhalili/projects.json/projects')
  const projects = await res.json()
  return {
    props: {
      projects
    }
  }
}