import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { DARK_THEME, LOCAL_STORAGE_KEY_THEME } from '@/Consts'

import { IAppContext } from '@/Types/AppContext.type'

interface IinitialState {
  appValue: IAppContext
  setAppValue: Dispatch<SetStateAction<IAppContext>>
}

const initialState: IinitialState = {
  appValue: {
    theme: DARK_THEME
  },

  setAppValue: () => {}
}

export const AppContext = createContext<IinitialState>(initialState)

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const theme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME)

  const [appValue, setAppValue] = useState<IAppContext>({
    ...initialState.appValue,
    theme: theme || DARK_THEME
  })

  return (
    <AppContext.Provider value={{ appValue, setAppValue }}>
      {children}
    </AppContext.Provider>
  )
}
