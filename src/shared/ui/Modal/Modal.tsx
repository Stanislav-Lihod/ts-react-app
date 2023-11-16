import { classNames } from 'shared/lib/className/classNames';
import cls from './Modal.module.less';
import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps{
  className?: string,
  children?: ReactNode,
  isShow?: boolean,
  onClose?: ()=> void
}

export const Modal = ({className, children, isShow, onClose}: ModalProps) => {
  //Variables
  const {theme} = useTheme();
  const body = useRef(document.body);
  const mods: Record<string,boolean> ={
    [cls.show]: isShow ?? false
  }


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



  return (
    <Portal>
      <div 
        className={classNames(cls.modal, mods, [className ?? '', theme])}
        onClick={onCloseHandler}
        >

        <div 
          className={cls['modal-content']}
          onClick={(e)=>e.stopPropagation()}
        >
          {children}
        </div>

      </div>
    </Portal>
  );
};