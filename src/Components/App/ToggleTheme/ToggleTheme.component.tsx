import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import { DARK_THEME, LIGHT_THEME } from '@/Consts'

import { AppContext } from '@/Contexts/App.context'
import { AppReducerActions } from '@/Reducers/App.reducer'

import ButtonComponent from '@/Components/System/Button'

import './ToggleTheme.style.scss'

const ToggleThemeComponent: React.FC = () => {
  const { appDispatch, appValue } = useContext(AppContext)

  const toggleTheme = () => {
    appDispatch({
      actionType: AppReducerActions.TOGGLE_THEME
    })
  }

  const buttons = [
    {
      theme: LIGHT_THEME,
      icon: <FaMoon />
    },

    {
      theme: DARK_THEME,
      icon: <FaSun />
    }
  ]

  return (
    <section className="toggle-theme">
      <ButtonComponent onClick={toggleTheme} style="secondary">
        <>
          {buttons.map((buttonItem) => (
            <p
              className={appValue.theme === buttonItem.theme ? 'disabled' : ''}
            >
              {buttonItem.icon}
            </p>
          ))}
        </>
      </ButtonComponent>
    </section>
  )
}

export default ToggleThemeComponent
