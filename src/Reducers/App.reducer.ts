import {
  DARK_THEME,
  LIGHT_THEME,
  LOCAL_STORAGE_KEY_LANGUAGE,
  LOCAL_STORAGE_KEY_THEME
} from '@/Consts'

import { IAppContext } from '@/Types/AppContext.type'
import { IReducer } from '@/Types/Reducer.type'
import { IReducerActions } from '@/Types/ReducerActions.type'

export const AppReducerActions = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  TOGGLE_MENU: 'TOGGLE_MENU'
}

const reducerActions = {
  [AppReducerActions.TOGGLE_THEME]: ({
    prevState
  }: IReducerActions<IAppContext>) => {
    const newTheme = prevState?.theme !== DARK_THEME ? DARK_THEME : LIGHT_THEME

    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme)

    return {
      ...prevState,
      theme: newTheme
    }
  },

  [AppReducerActions.CHANGE_LANGUAGE]: ({
    prevState,
    newValue
  }: IReducerActions<IAppContext>) => {
    const newLanguage = newValue

    localStorage.setItem(LOCAL_STORAGE_KEY_LANGUAGE, newLanguage)

    return {
      ...prevState,
      language: newLanguage
    }
  },

  [AppReducerActions.TOGGLE_MENU]: ({
    prevState
  }: IReducerActions<IAppContext>) => {
    return {
      ...prevState,
      menuOpen: !prevState?.menuOpen
    }
  }
}

export const AppReducer = (
  prevState: IAppContext,
  { actionType, newValue }: IReducer<keyof typeof AppReducerActions>
) => reducerActions[actionType]({ prevState, newValue })
