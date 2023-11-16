import cls from './Button.module.less';
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/className/classNames";

export enum ButtonTheme{
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
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