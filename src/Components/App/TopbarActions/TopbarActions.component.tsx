import { useContext } from 'react'

import { LANGUAGE_EN, LANGUAGE_PT } from '@/Consts'

import { AppContext } from '@/Contexts/App.context'
import { ReducerActionsKeys } from '@/Reducers/App.reducer'

import ToggleThemeComponent from '@/Components/App/ToggleTheme'
import ButtonComponent from '@/Components/System/Button'

import './TopbarActions.style.scss'

const TopbarActionsComponent: React.FC = () => {
  const { appDispatch, appValue } = useContext(AppContext)

  const languages = [LANGUAGE_PT, LANGUAGE_EN]

  const changeLanguage = (newLanguage: string) => {
    appDispatch({
      actionType: ReducerActionsKeys.CHANGE_LANGUAGE,
      newValue: newLanguage
    })
  }

  return (
    <ul className="topbar-actions">
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

export default TopbarActionsComponent
