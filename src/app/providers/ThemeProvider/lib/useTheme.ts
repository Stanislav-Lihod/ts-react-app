import { LOCAL_STORAGE_THEME_DATA, Theme, ThemsContext } from './ThemsContext'
import { useContext } from 'react'

interface useThemeResult {
  theme: Theme,
  toggleTheme: () => void
}

export function useTheme():useThemeResult{
  const {theme, setTheme} = useContext(ThemsContext)

  const toggleTheme = ()=>{
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_DATA, newTheme)
  }

  return{
    theme, 
    toggleTheme
  }
}