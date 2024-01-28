import {classNames} from "shared/lib/className/classNames";
import cls from "./LoginModal.module.less"
import {Modal} from "shared/ui/Modal/Modal";
import {AsyncLoginForm as LoginForm} from "../LoginForm/LoginForm.async";
import {Suspense, useEffect} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps{
  className?: string,
  isShow: boolean,
  onClose: ()=> void
}

export const LoginModal = ({className, isShow, onClose}: LoginModalProps) => {
  const authData = useSelector(getUserAuthData)
  useEffect(() => {
    if(authData && isShow) onClose()
  }, [authData]);
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className ?? ''])}
      isShow={isShow}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader/>}>
        <LoginForm/>
      </Suspense>
    </Modal>
  );
};