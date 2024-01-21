import {classNames} from "shared/lib/className/classNames";
import cls from "./LoginForm.module.less"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps{
  className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
  return (
    <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
      <Input className={cls.input} placeholder={'Email'}/>
      <Input className={cls.input} type={'password'} placeholder={'Password'}/>
      <Button theme={ButtonTheme.OUTLINE} className={cls.btn}>Sign in</Button>
    </div>
  );
};