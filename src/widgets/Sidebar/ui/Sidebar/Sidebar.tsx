import React, {useState, useEffect, memo} from 'react';
import cls from './Sidebar.module.less';
import { classNames } from 'shared/lib/className/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

type SidebarProps = {
	className?: string;
};

export const Sidebar = memo(({className}: SidebarProps) => {
  const storedState = JSON.parse(localStorage.NAVIGATION_UI_STATE || '{}');
  const defaultStateCollapse = storedState.collapsSidebar === 'true' || false;
  const defaultWidthCollapse = storedState.widthSidebar ?? 'var(--sidebar-width)';

  const [isCollapsed, setCollapsed] = useState <boolean>(defaultStateCollapse);
  const [isHoveredButton, setHoveredButton] = useState <boolean> (false);
  const [isActiveButton, setActiveButton] = useState<boolean>(false);
  const [isHoveredResize, setHoveredResize] = useState<boolean>(false);

  const onCollapsed = () => {
    setCollapsed(prev => !prev);
    setLocalStorage('collapsSidebar')
    !isCollapsed ? setCurrentWidthSidebar('var(--sidebar-width-collapse)') : setCurrentWidthSidebar(defaultWidthCollapse)
  };

  const setLocalStorage = (itemName : string) =>{
    const navigationUIState: Record<string, any> = JSON.parse(localStorage.getItem('NAVIGATION_UI_STATE') || '{}');
    if (itemName === 'collapsSidebar') {
      navigationUIState[itemName] = isCollapsed ? 'false' : 'true';
    }

    if (itemName === 'widthSidebar') {
      navigationUIState[itemName] = currentWidthSidebar
    }
    localStorage.setItem('NAVIGATION_UI_STATE', JSON.stringify(navigationUIState));
  }

  const [isResizing, setResizing] = useState<boolean>(false);
  const [resizeStartX, setResizeStartX] = useState<number | null>(null);
  const [initialPanelWidth, setInitialPanelWidth] = useState<number | null>(null);
  const [currentWidthSidebar, setCurrentWidthSidebar] = useState<string>(isCollapsed ? 'var(--sidebar-width-collapse)' : defaultWidthCollapse)
  const [sideBarTransition, setSideBarTransition] = useState('all 0.3s ease 0s');

  const handleMouseDown = (e: React.MouseEvent) => {
    setResizing(true);
    setResizeStartX(e.clientX);
    setInitialPanelWidth(e.currentTarget.parentElement?.offsetWidth || null);
    setSideBarTransition('')
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing && resizeStartX !== null && initialPanelWidth !== null) {
      const newWidth = initialPanelWidth + (e.clientX - resizeStartX);
      setCurrentWidthSidebar(Math.max(newWidth >= (window.innerWidth / 2) ? window.innerWidth / 2 : newWidth, 100) + 'px');
    }
  };

  const handleMouseUp = () => {
    setResizing(false);
    setResizeStartX(null);
    setInitialPanelWidth(null);
    setSideBarTransition('all 0.3s ease 0s')
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  useEffect(()=>{
    if (!isCollapsed) {
      setLocalStorage('widthSidebar')
    }
  }, [currentWidthSidebar])

  return (
    <div
      onMouseEnter={()=>setActiveButton(true)}
      onMouseLeave={()=>setActiveButton(false)}
      data-testid="sidebar"
      style={{ width: currentWidthSidebar, transition: sideBarTransition }}
      className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className ?? ''])}
    >
      <div
        onMouseEnter={() => setHoveredResize(true)}
        onMouseLeave={() => setHoveredResize(false)}
        onMouseDown={handleMouseDown}
        className={classNames(cls['resize-panel'])}>
        <div className={classNames(cls['resize-panel-border'])}></div>
        <div className={classNames(cls['resize-panel-resize-block'])}>
          <div className={classNames(cls['resize-panel-resize-block-status'], {[cls.hover]: isHoveredResize})}></div>
        </div>
      </div>

      <div
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        onClick={onCollapsed}
        className={classNames(cls['sidebar-button-wrapper'], {})}
      >
        <button
          className={classNames(cls['sidebar-button'], {
            [cls.hide]: isCollapsed,
            [cls.hover]: isHoveredButton,
            [cls.active]: isActiveButton || isCollapsed,
          })}
          data-testid="sidebar-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M13.706 9.698a.988.988 0 000-1.407 1.01 1.01 0 00-1.419 0l-2.965 2.94a1.09 1.09 0 000 1.548l2.955 2.93a1.01 1.01 0 001.42 0 .988.988 0 000-1.407l-2.318-2.297 2.327-2.307z" fill="var(--accent-color)"></path></svg>
        </button>
        <div>{isActiveButton}</div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
});
