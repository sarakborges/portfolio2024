import { getText } from '@/Utils'

import { NAME, TITLE } from '@/Texts/TextTokens'

import PictureComponent from '@/Components/System/Picture'

import './Header.style.scss'

const HeaderComponent: React.FC = () => {
  return (
    <header id="header">
      <section>
        <h1>{getText(NAME)}</h1>
        <h2>{getText(TITLE)}</h2>
      </section>

      <PictureComponent src="picture.jpg" alt="Profile picture" round />
    </header>
  )
}

export default HeaderComponent
