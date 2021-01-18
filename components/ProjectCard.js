import Head from 'next/head'
import Link from 'next/link'

export default function Project(props) {
  const project = props.project
  return (
    <Link href="/p/[id]" as={`/p/${project.id}`}>
      <div className="card">
        <h3>{project.name} &rarr;</h3>
      </div>
    </Link>
  ) 
}