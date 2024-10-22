import { DARK_THEME, LIGHT_THEME, LOCAL_STORAGE_KEY_THEME } from '@/Consts'

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
    const newTheme = prevState?.theme !== DARK_THEME ? DARK_THEME : LIGHT_THEME

    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme)

    return {
      ...prevState,
      theme: newTheme
    }
  }
}

export const AppReducer = (
  prevState: IAppContext,
  { actionType, newValue }: IAppReducer
) => reducerActions[actionType]({ prevState, newValue })
