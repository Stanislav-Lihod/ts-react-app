import {classNames} from "shared/lib/className/classNames";
import cls from "./Input.module.less"
import React, {InputHTMLAttributes, memo, useCallback, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
  className?: string,
  value?: string | number,
  onChange?: (value: string | number) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    onChange?.(e.target.value)
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const passwordShower = useCallback(()=>{
    setShowPassword(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.InputWrapper, {}, [className ?? ''])}>
      <input
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
      {type === 'password' && (
        <span
          onClick={passwordShower}
          className={`${cls.hidePass} ${showPassword && cls.openPass}`}>
        </span>
      )}
    </div>
  );
});