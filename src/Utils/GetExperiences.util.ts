import { useContext } from 'react'

import * as EN_TEXT from '@/Texts/Experiences.En'
import * as PT_TEXT from '@/Texts/Experiences.Pt'

import { AppContext } from '@/Contexts/App.context'

export const getExperiences = (key: keyof typeof EN_TEXT) => {
  const { appValue } = useContext(AppContext)
  const language: 'pt' | 'en' = (appValue.language as 'pt' | 'en') || 'pt'

  const texts = {
    en: { ...EN_TEXT },
    pt: { ...PT_TEXT }
  }

  return texts[language][key] || ''
}
