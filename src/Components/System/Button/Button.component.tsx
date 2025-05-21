import { IButtonComponent } from './Button.type'

import './Button.style.scss'

const ButtonComponent: React.FC<IButtonComponent> = ({
  children,
  style,
  round,
  ...rest
}) => {
  const buttonClasses = [
    'button-component',
    style || 'primary',
    round ? 'round' : ''
  ].join(' ')

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default ButtonComponent
