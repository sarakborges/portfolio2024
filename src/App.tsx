import { AppProvider } from '@/Contexts/AppContext'

import HomePage from '@/Pages/Home'

import './App.css'

function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}

export default App
