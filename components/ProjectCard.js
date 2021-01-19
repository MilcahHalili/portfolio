import Head from 'next/head'
import Link from 'next/link'
import Project from '../pages/p/[id]'

export default function ProjectCard(props) {
  const project = props.project
  return (
    <>
      <Link href="/p/[id]" as={`/p/${project.id}`}>
        <div className="card project-card">
          <h3>
            {project.name} &rarr;
          </h3>
        </div>
      </Link>
    </>
  ) 
}