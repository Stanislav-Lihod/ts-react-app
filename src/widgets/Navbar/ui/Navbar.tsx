import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/className/classNames';
import cls from './Navbar.module.less';
import {useCallback, useState} from 'react';
import {Button} from 'shared/ui/Button/Button';
import {LoginModal} from "features/AuthByUsername";

type NavbarProps = {
	className?: string;
};

export const Navbar = ({className}: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onAuthModeToggle = useCallback(()=>{
    setIsAuthModal(prev => !prev)
  }, [])

  return(
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.links}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <div className={cls.authorization}>
        <Button 
          onClick={onAuthModeToggle}>Login</Button>
        <LoginModal
          isShow={isAuthModal}
          onClose={onAuthModeToggle}
        />
      </div>
    </div>
  )
};
