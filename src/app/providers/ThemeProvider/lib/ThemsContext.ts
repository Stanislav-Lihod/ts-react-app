import {createContext} from 'react';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ThemContext = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

export const ThemsContext = createContext<ThemContext>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_DATA = 'theme';
