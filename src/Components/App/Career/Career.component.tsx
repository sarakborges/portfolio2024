import { getText } from '@/Utils'

import { CAREER_TEXT, CAREER_TITLE } from '@/Texts/TextTokens'

import './Career.style.scss'

const CareerComponent: React.FC = () => {
  return (
    <section id="career">
      <article className="career-wrapper">
        <h2>{getText(CAREER_TITLE)}</h2>
        <p>{getText(CAREER_TEXT)}</p>
      </article>
    </section>
  )
}

export default CareerComponent
