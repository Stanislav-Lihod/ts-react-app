import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/className/classNames';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {userAction} from "entities/User";

const App = () => {
	const {theme} = useTheme();
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userAction.initAuthData())
	}, []);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<div className='main'>
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
