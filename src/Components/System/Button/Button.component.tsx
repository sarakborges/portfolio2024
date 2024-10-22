import './Button.style.scss'

interface IButtonComponent {
  children: string | JSX.Element
  type?: 'submit' | 'reset'
  style?: 'primary' | 'secondary' | 'cancel'
  transparent?: boolean
  onClick?: () => void
}

const ButtonComponent: React.FC<IButtonComponent> = ({
  children,
  style,
  transparent,
  ...rest
}) => {
  return (
    <button
      className={`button-component ${style || 'primary'} ${
        transparent ? 'transparent' : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ButtonComponent
