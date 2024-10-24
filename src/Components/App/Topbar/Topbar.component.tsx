import TopbarMenuComponent from '@/Components/App/TopbarMenu'
import PictureComponent from '@/Components/System/Picture'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  return (
    <nav id="topbar">
      <section className="topbar-wrapper">
        <PictureComponent src="picture.png" alt="Profile picture" round />
        <TopbarMenuComponent />
      </section>
    </nav>
  )
}

export default TopbarComponent
