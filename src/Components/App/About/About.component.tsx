import { getText } from '@/Utils'

import { ABOUT_TEXT } from '@/Texts/TextTokens'

import './About.style.scss'

const AboutComponent: React.FC = () => {
  return (
    <section id="about">
      <article className="about-wrapper">
        <p>{getText(ABOUT_TEXT)}</p>
      </article>
    </section>
  )
}

export default AboutComponent
