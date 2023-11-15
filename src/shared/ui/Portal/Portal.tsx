import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps{
  children: ReactNode,
  parent?: HTMLElement
}

export const Portal = ({children, parent = document.body}: ModalProps) => {
  return createPortal(children, parent)
};
