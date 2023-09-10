import {Routes, Route, Link} from 'react-router-dom'
import { AsyncAboutPage } from './pages/AboutPage/AboutPage.async';
import { AsyncMainPage } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';

import "./styles/index.less"
import { useTheme } from './contexts/theme/useTheme';

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>qwe</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AsyncAboutPage/>}/>
          <Route path='/' element={<AsyncMainPage/>}/>
        </Routes>
      </Suspense>
      
    </div>
  );
};

export default App;