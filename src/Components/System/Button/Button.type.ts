export interface IButtonComponent {
  children: string | JSX.Element
  type?: 'submit' | 'reset'
  style?: 'primary' | 'secondary' | 'cancel'
  transparent?: boolean
  round?: boolean
  disabled?: boolean
  onClick?: () => void
}
