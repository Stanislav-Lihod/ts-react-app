import { NotFound } from 'pages/404';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import {ProfilePage} from "pages/ProfilePage";

export const AppRouter = () => (
	<Suspense fallback={<PageLoader/>}>
		<div className='general'>
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/about' element={<AboutPage/>}/>
				<Route path='/profile' element={<ProfilePage/>}/>

				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</div>
	</Suspense>
);
