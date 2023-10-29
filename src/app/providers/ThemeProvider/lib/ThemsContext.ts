import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemContext {
  theme?: Theme,
  setTheme?: (theme: Theme)=> void
}

export const ThemsContext = createContext<ThemContext>({})

export const LOCAL_STORAGE_THEME_DATA = 'theme'