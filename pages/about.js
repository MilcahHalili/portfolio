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
            I'm the Director of Engineering at <a href="https://chaninicholas.com/">CHANI</a>. I help improve the reliability of our native iOS app, build an agile engineering team, direct new feature releases, consult on technical architecture, and write backend code.
          </p>
          <p>
            Formerly, I've worked at <a href="https://generalassemb.ly">General Assembly</a> as an Instructional Associate, for the Remote Full Stack Software Engineering Immersive.
          </p>
          <p>
            My favorite design agency to work with is <a href="https://softcorestudio.com">Softcore Studio</a>. We created beautiful and easeful online experiences together for <a href="https://freckbeauty.com">Freck Beauty</a>.
          </p>
          <p>
            When I'm not helping humans solve challenging problems, I write lyrical essays and poetry, build queer community, snuggle with my puppy, go for nice, long walks, and take trips in my electric car.
          </p>
        </article>
    </Layout>
  )
}