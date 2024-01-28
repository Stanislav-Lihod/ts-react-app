import {useTheme} from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.less';
import {classNames} from 'shared/lib/className/classNames';
import {memo} from "react";

interface ThemeSwitcherProps{
	className?: string
}
export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div
			className={classNames(cls.themeSwitcher, {}, [cls[theme], className])}
			onClick={toggleTheme}>
		</div>
	);
});
