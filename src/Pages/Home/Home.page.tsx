import { useContext } from 'react'

import { AppContext } from '@/Contexts/App.context'

import TopbarComponent from '@/Components/App/Topbar'

import './Home.style.scss'

const HomePage = () => {
  const { appValue } = useContext(AppContext)

  return (
    <main id="home-page" className={appValue?.theme}>
      <TopbarComponent />

      <section></section>
    </main>
  )
}

export default HomePage
