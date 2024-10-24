import { getText } from '@/Utils'

import { TOPBAR_MENU_ITEMS } from '@/Consts'

import ToggleThemeComponent from '@/Components/App/ToggleTheme'

import './TopbarMenu.style.scss'

const TopbarMenuComponent: React.FC = () => {
  return (
    <ul className="topbar-menu">
      {TOPBAR_MENU_ITEMS.map((item) => (
        <li key={item.id}>
          <a href={`#${item.anchor}`}>{getText(item.id)}</a>
        </li>
      ))}

      <li className="toggle-theme-wrapper">
        <ToggleThemeComponent />
      </li>
    </ul>
  )
}

export default TopbarMenuComponent
