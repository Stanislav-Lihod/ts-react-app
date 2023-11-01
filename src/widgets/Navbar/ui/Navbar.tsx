import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/className/classNames';
import cls from './Navbar.module.less';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.navbar, {}, [className ?? ''])}>
		<div className={cls.links}>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
		</div>
	</div>
);
