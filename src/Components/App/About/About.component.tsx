import { getText } from '@/Utils'

import { ABOUT_TEXT, ABOUT_TITLE } from '@/Texts/TextTokens'

import './About.style.scss'

const AboutComponent: React.FC = () => {
  return (
    <article id="about">
      <h2>{getText(ABOUT_TITLE)}</h2>
      <p>{getText(ABOUT_TEXT)}</p>
    </article>
  )
}

export default AboutComponent
