import {useTheme} from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.less';
import {classNames} from 'shared/lib/className/classNames';

export const ThemeSwitcher = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div
			className={classNames(cls.themeSwitcher, {}, [cls[theme]])}
			onClick={toggleTheme}>
		</div>
	);
};
