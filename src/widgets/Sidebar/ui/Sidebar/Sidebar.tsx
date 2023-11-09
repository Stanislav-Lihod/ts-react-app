import {classNames} from 'shared/lib/className/classNames';
import cls from './Sidebar.module.less';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
	const defaultStateCollapse = Boolean(localStorage.getItem('collapsSidebar')) || false;

	const [collapsed, setCollapsed] = useState(defaultStateCollapse);

	const onCollapsed = () => {
		setCollapsed(prev => !prev);
		localStorage.setItem('collapsSidebar', collapsed ? 'false' : 'true');
	};

	return (
		<div 
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className ?? ''])}
    >
			<button 
        data-testid="sidebar-toggle"
        onClick={onCollapsed}
      >
        {collapsed ? 'open' : 'close'}
      </button>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};
