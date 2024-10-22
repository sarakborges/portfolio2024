import { IButtonComponent } from './Button.type'

import './Button.style.scss'

const ButtonComponent: React.FC<IButtonComponent> = ({
  children,
  style,
  transparent,
  round,
  ...rest
}) => {
  const buttonClasses = [
    'button-component',
    style || 'primary',
    transparent ? 'transparent' : '',
    round ? 'round' : ''
  ].join(' ')

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default ButtonComponent
