import ToggleThemeComponent from '@/Components/App/ToggleTheme'
import PictureComponent from '@/Components/System/Picture'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  return (
    <nav id="topbar">
      <PictureComponent src="picture.png" alt="Profile picture" round />

      <ul>
        <li>
          <ToggleThemeComponent />
        </li>
      </ul>
    </nav>
  )
}

export default TopbarComponent
