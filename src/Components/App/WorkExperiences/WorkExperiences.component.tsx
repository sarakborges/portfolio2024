import { getExperiences, getText } from '@/Utils'

import { WORK_EXPERIENCES, WORK_EXPERIENCES_TITLE } from '@/Texts/TextTokens'

import './WorkExperiences.style.scss'

const WorkExperiencesComponent: React.FC = () => {
  return (
    <section id="work-experiences">
      <article className="work-experiences-wrapper">
        <h2>{getText(WORK_EXPERIENCES_TITLE)}</h2>

        <ul>
          {getExperiences(WORK_EXPERIENCES).map((experienceItem) => (
            <li key={experienceItem.company}>
              <h3>{experienceItem.title}</h3>
              <h4>{`${experienceItem.company} | ${experienceItem.location} | ${experienceItem.period}`}</h4>

              <p>
                {experienceItem.responsibilities
                  .map((responsabilityItem) => `- ${responsabilityItem}`)
                  .join(`\n`)}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default WorkExperiencesComponent
