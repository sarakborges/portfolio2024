import { createContext, Dispatch, useReducer } from 'react'

import {
  DARK_THEME,
  LANGUAGE_EN,
  LOCAL_STORAGE_KEY_LANGUAGE,
  LOCAL_STORAGE_KEY_THEME
} from '@/Consts'

import { IAppContext } from '@/Types/AppContext.type'
import { AppReducer } from '@/Reducers/App.reducer'

interface IinitialState {
  appValue: IAppContext
  appDispatch: Dispatch<any>
}

const initialState: IinitialState = {
  appValue: {
    theme: DARK_THEME,
    language: LANGUAGE_EN,
    menuOpen: false
  },

  appDispatch: () => {}
}

export const AppContext = createContext<IinitialState>(initialState)

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const theme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME)
  const language = localStorage.getItem(LOCAL_STORAGE_KEY_LANGUAGE)

  const [appValue, appDispatch] = useReducer(AppReducer, {
    ...initialState.appValue,
    theme: theme || DARK_THEME,
    language: language || LANGUAGE_EN
  })

  return (
    <AppContext.Provider value={{ appValue, appDispatch }}>
      {children}
    </AppContext.Provider>
  )
}
