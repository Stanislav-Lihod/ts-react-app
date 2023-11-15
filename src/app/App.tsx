
import {useTheme} from './providers/ThemeProvider/lib/useTheme';
import {classNames} from '../shared/lib/className/classNames';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';

const App = () => {
	const {theme} = useTheme();
  const [isShow, setIsShow] = useState<boolean>(false)

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
      <Modal 
        isShow={isShow}
        onClose={()=>setIsShow(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error odit quam ullam repudiandae molestiae inventore deleniti eum! Reiciendis, optio.
      </Modal>
			<div className='main'>
        <button onClick={()=>setIsShow(true)}>modal</button>
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
