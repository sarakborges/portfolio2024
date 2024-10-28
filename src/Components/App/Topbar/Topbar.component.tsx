import { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'

import { AppContext } from '@/Contexts/App.context'
import { AppReducerActions } from '@/Reducers/App.reducer'

import TopbarMenuComponent from '@/Components/App/TopbarMenu'
import ButtonComponent from '@/Components/System/Button'
import PictureComponent from '@/Components/System/Picture'

import './Topbar.style.scss'

const TopbarComponent: React.FC = () => {
  const { appDispatch, appValue } = useContext(AppContext)

  const toggleMenu = () => {
    appDispatch({
      actionType: AppReducerActions.TOGGLE_MENU
    })
  }

  return (
    <nav id="topbar">
      <section
        className={['topbar-wrapper', appValue?.menuOpen ? 'open' : ''].join(
          ' '
        )}
      >
        <PictureComponent src="picture.jpg" alt="Profile picture" round />

        <ButtonComponent onClick={toggleMenu}>
          <FiMenu />
        </ButtonComponent>

        <TopbarMenuComponent />
      </section>
    </nav>
  )
}

export default TopbarComponent
