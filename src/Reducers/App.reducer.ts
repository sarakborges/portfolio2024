import { DARK_THEME, LIGHT_THEME } from '@/Consts'

import { IAppContext } from '@/Types/AppContext.type'

export const AppReducerActions = {
  TOGGLE_THEME: 'TOGGLE_THEME'
}

interface IAppReducer {
  actionType: keyof typeof AppReducerActions
  newValue?: any
}

const reducerActions = {
  TOGGLE_THEME: ({
    prevState,
    newValue
  }: {
    prevState: IAppContext
    newValue?: any
  }) => {
    return {
      ...prevState,
      theme: prevState?.theme !== DARK_THEME ? DARK_THEME : LIGHT_THEME
    }
  }
}

export const AppReducer = (
  prevState: IAppContext,
  { actionType, newValue }: IAppReducer
) => reducerActions[actionType]({ prevState, newValue })
