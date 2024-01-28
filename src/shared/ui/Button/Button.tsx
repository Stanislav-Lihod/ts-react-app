import cls from './Button.module.less';
import {ButtonHTMLAttributes, memo} from "react";
import { classNames } from "shared/lib/className/classNames";

export enum ButtonTheme{
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ButtonTheme,
  disabled?: boolean
}

export const Button = memo<ButtonProps>((props: ButtonProps) => {
  const {
    children,
    className = '',
    theme = '',
    disabled = false,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.disabled]: disabled
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
});