import { useContext } from 'react'

import { AppContext } from '@/Contexts/App.context'
import { AppReducerActions } from '@/Reducers/App.reducer'

import ButtonComponent from '@/Components/System/Button'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  const { appDispatch } = useContext(AppContext)

  const toggleTheme = () => {
    appDispatch({
      actionType: AppReducerActions.TOGGLE_THEME
    })
  }

  return (
    <nav id="topbar">
      <p>Sara Borges</p>

      <ul>
        <li>
          <ButtonComponent onClick={toggleTheme} style="secondary">
            Toggle theme
          </ButtonComponent>
        </li>
      </ul>
    </nav>
  )
}

export default TopbarComponent
