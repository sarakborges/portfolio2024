import { IConditionalComponent } from './Conditional.type'

const ConditionalComponent: React.FC<IConditionalComponent> = ({
  condition,
  children
}) => {
  if (!Boolean(condition)) {
    return <></>
  }

  return <>{children}</>
}

export default ConditionalComponent
