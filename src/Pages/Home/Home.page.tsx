import { useContext } from 'react'

import { AppContext } from '@/Contexts/App.context'
import { AppReducerActions } from '@/Reducers/App.reducer'

import './Home.style.scss'

export default function HomePage() {
  const { appValue, appDispatch } = useContext(AppContext)

  const toggleTheme = () => {
    appDispatch({
      actionType: AppReducerActions.TOGGLE_THEME
    })
  }

  return (
    <main id="home-page" className={appValue?.theme}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <p>YEE HAW</p>
    </main>
  )
}
