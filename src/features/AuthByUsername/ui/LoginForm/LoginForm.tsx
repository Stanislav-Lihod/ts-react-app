import {classNames} from "shared/lib/className/classNames";
import cls from "./LoginForm.module.less"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {getLoginState} from "../../model/selectors/getLoginState";
import {loginAction} from "../../model/slice/LoginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUserName";
import {PageLoader} from "widgets/PageLoader";

interface LoginFormProps{
  className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {

  const dispatch = useDispatch()
  const {username, password, isLoading, error} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) =>{
    dispatch(loginAction.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) =>{
    dispatch(loginAction.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({username, password}));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
      {isLoading && <PageLoader/>}
      {error && <div>{error}</div>}
      <Input
        className={cls.input}
        placeholder={'Email'}
        value={username}
        onChange={onChangeUsername}

      />
      <Input
        className={cls.input}
        type={'password'}
        placeholder={'Password'}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.btn}
      >
        Sign in
      </Button>
    </div>
  );
})