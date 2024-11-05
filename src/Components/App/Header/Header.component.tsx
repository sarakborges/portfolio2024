import { getText } from '@/Utils'

import { NAME, TITLE, SUBTITLE } from '@/Texts/TextTokens'

import PictureComponent from '@/Components/System/Picture'

import './Header.style.scss'

const HeaderComponent: React.FC = () => {
  return (
    <header id="header">
      <section className="header-wrapper">
        <PictureComponent src="picture.jpg" alt="Profile picture" round />

        <article>
          <h1>{getText(NAME)}</h1>
          <h2>{getText(TITLE)}</h2>
          <h3>{getText(SUBTITLE)}</h3>
        </article>
      </section>
    </header>
  )
}

export default HeaderComponent
