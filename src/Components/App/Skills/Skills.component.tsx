import { getText } from '@/Utils'

import { HARD_SKILLS, TOOLS } from '@/Consts/Skills.consts'
import {
  HARD_SKILLS_TITLE,
  SOFT_SKILLS_TITLE,
  TOOLS_TITLE
} from '@/Texts/TextTokens'

import './Skills.style.scss'

const SkillsComponent: React.FC = () => {
  return (
    <section id="skills">
      <article className="skills-wrapper">
        <h2>{getText(HARD_SKILLS_TITLE)}</h2>

        <ul>
          {HARD_SKILLS.map((skillItem) => (
            <li key={skillItem}>{skillItem}</li>
          ))}
        </ul>

        <h2>{getText(TOOLS_TITLE)}</h2>

        <ul>
          {TOOLS.map((skillItem) => (
            <li key={skillItem}>{skillItem}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default SkillsComponent
