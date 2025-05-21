export interface IButtonComponent {
  children?: string | JSX.Element
  type?: 'submit' | 'reset'
  style?: 'primary'
  transparent?: boolean
  round?: boolean
  disabled?: boolean
  onClick?: () => void
}
