import { useContext } from 'react'

import { getText } from '@/Utils'

import { LANGUAGE_EN, LANGUAGE_PT, TOPBAR_MENU_ITEMS } from '@/Consts'

import { AppContext } from '@/Contexts/App.context'
import { AppReducerActions } from '@/Reducers/App.reducer'

import ToggleThemeComponent from '@/Components/App/ToggleTheme'
import ButtonComponent from '@/Components/System/Button'

import './TopbarMenu.style.scss'

const TopbarMenuComponent: React.FC = () => {
  const { appDispatch, appValue } = useContext(AppContext)

  const languages = [LANGUAGE_PT, LANGUAGE_EN]

  const changeLanguage = (newLanguage: string) => {
    appDispatch({
      actionType: AppReducerActions.CHANGE_LANGUAGE,
      newValue: newLanguage
    })
  }

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

      <li className="change-language-wrapper">
        {languages.map((language) => (
          <ButtonComponent
            key={language}
            disabled={language === appValue.language}
            onClick={() => {
              changeLanguage(language)
            }}
          >
            {language.toUpperCase()}
          </ButtonComponent>
        ))}
      </li>
    </ul>
  )
}

export default TopbarMenuComponent
