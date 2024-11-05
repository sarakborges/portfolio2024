import { SOCIAL_LINKS } from '@/Consts'

import './SocialLinks.style.scss'

const SocialLinksComponent: React.FC = () => {
  return (
    <ul className="social-links">
      {SOCIAL_LINKS.map((socialItem) => (
        <li key={socialItem.ID}>
          <a href={socialItem.LINK} target="_blank" rel="noopener noreferrer">
            {socialItem.ICON}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinksComponent
