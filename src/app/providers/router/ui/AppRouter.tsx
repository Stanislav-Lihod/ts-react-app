import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

export const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<div className='general'>
			<Routes>
				<Route path='/about' element={<AboutPage/>}/>
				<Route path='/' element={<MainPage/>}/>
			</Routes>
		</div>
	</Suspense>
);
