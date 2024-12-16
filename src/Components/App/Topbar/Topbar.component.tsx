import TopbarMenuComponent from '@/Components/App/TopbarActions'
import SocialLinksComponent from '@/Components/App/SocialLinks'

import PictureComponent from '@/Components/System/Picture'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  return (
    <nav id="topbar">
      <section className="topbar-wrapper">
        <SocialLinksComponent />
        <TopbarMenuComponent />
      </section>
    </nav>
  )
}

export default TopbarComponent
