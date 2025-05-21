import { useContext } from 'react'

import { AppContext } from '@/Contexts/App.context'

import TopbarComponent from '@/Components/App/Topbar'
import HeaderComponent from '@/Components/App/Header'
import AboutComponent from '@/Components/App/About'
import SkillsComponent from '@/Components/App/Skills'
import CareerComponent from '@/Components/App/Career'
import WorkExperiencesComponent from '@/Components/App/WorkExperiences'

import './Home.style.scss'

const HomePage = () => {
  const { appValue } = useContext(AppContext)

  return (
    <main id="home-page" className={appValue?.theme}>
      <TopbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent />
      <CareerComponent />
      <WorkExperiencesComponent />
    </main>
  )
}

export default HomePage
