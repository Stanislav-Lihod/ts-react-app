import cls from './Button.module.less';
import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/className/classNames";

export enum ButtonTheme{
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className = '',
    theme = '',
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}  
    </button>
  );
};