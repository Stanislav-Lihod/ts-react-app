import {classNames} from "shared/lib/className/classNames";
import cls from "./LoginModal.module.less"
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface LoginModalProps{
  className?: string,
  isShow: boolean,
  onClose: ()=> void
}

export const LoginModal = ({className, isShow, onClose}: LoginModalProps) => {
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className ?? ''])}
      isShow={isShow}
      onClose={onClose}
      lazy
    >
      <LoginForm/>
    </Modal>
  );
};