import { useContext } from 'react'

import * as EN_TEXT from '@/Texts/En'
import * as PT_TEXT from '@/Texts/Pt'

import { AppContext } from '@/Contexts/App.context'

export const getText = (key: string) => {
  const { appValue } = useContext(AppContext)
  const language = appValue.language || 'en'

  if (language === 'en') {
    const enKey = key as keyof typeof EN_TEXT
    return EN_TEXT[enKey]
  }

  if (language === 'pt') {
    const ptKey = key as keyof typeof PT_TEXT
    return PT_TEXT[ptKey]
  }

  return ''
}
