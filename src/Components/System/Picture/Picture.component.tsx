import { IPictureComponent } from './Picture.type'

import './Picture.style.scss'

const PictureComponent: React.FC<IPictureComponent> = ({ src, alt, round }) => {
  const pictureClasses = ['picture-component', round ? 'round' : ''].join(' ')

  return (
    <picture className={pictureClasses}>
      <img src={src} alt={alt} />
    </picture>
  )
}

export default PictureComponent
