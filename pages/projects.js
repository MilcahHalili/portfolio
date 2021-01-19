import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
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
      <Layout
        title="Projects"
      >
        <div className="grid">
          {projects.map(project => {
            return <ProjectCard
              project={project}
              key={project.id}
            />
          })}
        </div>
      </Layout>
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