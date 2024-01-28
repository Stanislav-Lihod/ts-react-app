import {classNames} from "shared/lib/className/classNames";
import cls from "./LoginForm.module.less"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginAction, loginReducer} from "../../model/slice/LoginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUserName";
import {PageLoader} from "widgets/PageLoader";
import {getLoginUsername} from "../../model/selectors/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps{
  className?: string
}

const initalReducers: ReducersList = {
  'loginForm' : loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {

  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initalReducers}>
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
    </DynamicModuleLoader>
  );
})

export default LoginForm