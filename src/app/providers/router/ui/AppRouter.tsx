import { NotFound } from 'pages/404';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
	<Suspense fallback={<PageLoader/>}>
		<div className='general'>
			<Routes>
				<Route path='/about' element={<AboutPage/>}/>
				<Route path='/' element={<MainPage/>}/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</div>
	</Suspense>
);
