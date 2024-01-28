import { classNames } from 'shared/lib/className/classNames';
import cls from './Modal.module.less';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps{
  className?: string,
  children?: ReactNode,
  isShow?: boolean,
  onClose?: ()=> void,
  lazy?: boolean
}

export const Modal = ({className, children, isShow, onClose, lazy}: ModalProps) => {
  //Variables
  const {theme} = useTheme();
  const body = useRef(document.body);
  const mods: Record<string,boolean> ={
    [cls.show]: isShow ?? false
  }
  const [isMounted, setIsMounted] = useState(false)


  // functions
  const onCloseHandler = useCallback(()=>{
    onClose && onClose()
  },[onClose])

  const onCloseKeydown = useCallback((e: KeyboardEvent)=>{
    e.key === 'Escape' && onCloseHandler()
  }, [onCloseHandler])


  // hooks
  useEffect(()=>{
    if (isShow) {
      body.current.style.overflow = 'hidden'
      window.addEventListener('keydown', onCloseKeydown)
    } else{
      body.current.removeAttribute('style');
    }

    return () => {
      body.current.style.removeProperty('overflow')
      window.addEventListener('keydown', onCloseKeydown)
    };
  }, [isShow, onCloseKeydown])

  useEffect(() => {
    isShow && setIsMounted(true)
  }, [isShow]);


  if (lazy && !isMounted){
    return null
  }

  return (
    <Portal>
      <div 
        className={classNames(cls.modal, mods, [className ?? '', theme])}
        onClick={onCloseHandler}
        >

        <div onClick={(e)=>e.stopPropagation()}>
          {children}
        </div>

      </div>
    </Portal>
  );
};