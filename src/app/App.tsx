import {Routes, Route, Link} from 'react-router-dom'
import { Suspense } from 'react';

import "./styles/index.less"
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { className } from '../shared/lib/className/className';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={className('app',{}, [theme])}>
      <button onClick={toggleTheme}>qwe</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Suspense>
      
    </div>
  );
};

export default App;