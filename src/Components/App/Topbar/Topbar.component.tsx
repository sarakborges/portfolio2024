import { FiMenu } from 'react-icons/fi'

import TopbarMenuComponent from '@/Components/App/TopbarMenu'
import ButtonComponent from '@/Components/System/Button'
import PictureComponent from '@/Components/System/Picture'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  return (
    <nav id="topbar">
      <section className="topbar-wrapper">
        <PictureComponent src="picture.png" alt="Profile picture" round />

        <ButtonComponent style="secondary">
          <FiMenu />
        </ButtonComponent>

        <TopbarMenuComponent />
      </section>
    </nav>
  )
}

export default TopbarComponent
