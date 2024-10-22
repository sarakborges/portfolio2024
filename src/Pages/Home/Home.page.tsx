import { useContext } from 'react'

import { AppContext } from '@/Contexts/AppContext'

import './Home.style.scss'
import { DARK_THEME, LIGHT_THEME } from '@/Consts'

export default function HomePage() {
  const { appValue, setAppValue } = useContext(AppContext)

  const toggleTheme = () => {
    setAppValue({
      ...appValue,
      theme: appValue.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME
    })
  }

  return (
    <main id="home-page" className={appValue.theme}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <p>YEE HAW</p>
    </main>
  )
}
