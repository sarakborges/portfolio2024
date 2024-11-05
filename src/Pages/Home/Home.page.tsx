import { useContext } from 'react'

import { AppContext } from '@/Contexts/App.context'

import TopbarComponent from '@/Components/App/Topbar'
import HeaderComponent from '@/Components/App/Header'
import AboutComponent from '@/Components/App/About'
import ExperiencesComponent from '@/Components/App/Experiences'

import './Home.style.scss'

const HomePage = () => {
  const { appValue } = useContext(AppContext)

  return (
    <main id="home-page" className={appValue?.theme}>
      <TopbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <ExperiencesComponent />
    </main>
  )
}

export default HomePage
