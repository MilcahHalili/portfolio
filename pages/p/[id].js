import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Project({ project }) {
  return (
    <Layout
      title={project.name}
    >
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      <a href={project.url}>View app here.</a>
      <Link href="/">👈🏽 Back</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://my-json-server.typicode.com/milcahhalili/projects.json/projects')
  const projects = await res.json()

  const paths = projects.map(project => ({
    params: {
      id: project.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://my-json-server.typicode.com/milcahhalili/projects.json/projects/${params.id}`)
  const project = await res.json()
  return {
    props: {
      project
    }
  }
}