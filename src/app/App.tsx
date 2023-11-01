import './styles/index.less';
import {useTheme} from './providers/ThemeProvider/lib/useTheme';
import {classNames} from '../shared/lib/className/classNames';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar';

const App = () => {
	const {theme} = useTheme();
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
