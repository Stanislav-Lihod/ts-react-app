import { FC, ReactNode, useState, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_DATA, Theme, ThemsContext } from '../lib/ThemsContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_DATA) as Theme || Theme.LIGHT
interface Props {
  children: ReactNode;
}
const ThemsProvider:FC<Props> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemsContext.Provider value={defaultProps}>
      {children}
    </ThemsContext.Provider>
  );
};

export default ThemsProvider;