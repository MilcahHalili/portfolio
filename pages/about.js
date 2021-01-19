import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout
      title="About"
    >
      <h2>Hi, 👋🏽 my name is Milcah.</h2>
        <div>
          <img src="https://i.imgur.com/mOadh85.png" />
        </div>
        <article>
          <p>
            Currently, I work at <a href="https://generalassemb.ly">General Assembly</a> as an Instructional Associate, for the Remote Software Engineering Immersive.
          </p>
          <p>
            My favorite design agency to work with is <a href="https://softcorestudio.com">Softcore Studio</a>. We've created beautiful and easeful online experiences together for <a href="https://freckbeauty.com">Freck Beauty</a>.
          </p>
          <p>
            When I'm not helping humans solve challenging problems, I write lyrical essays and poetry, build queer community, take care of my puppy, go for nice, long walks, and take trips in my electric car.
          </p>
        </article>
    </Layout>
  )
}