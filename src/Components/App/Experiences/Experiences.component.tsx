import { getText } from '@/Utils'

import { EXPERIENCES_TEXT, EXPERIENCES_TITLE } from '@/Texts/TextTokens'

import './Experiences.style.scss'

const ExperiencesComponent: React.FC = () => {
  return (
    <section id="experiences">
      <article className="experiences-wrapper">
        <h2>{getText(EXPERIENCES_TITLE)}</h2>
        <p>{getText(EXPERIENCES_TEXT)}</p>
      </article>
    </section>
  )
}

export default ExperiencesComponent
