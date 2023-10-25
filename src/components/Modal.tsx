import { useEffect, useLayoutEffect, useState } from "react";
import ReactDom from "react-dom";
import { modalType } from "./TypesOfProject";

const BackDrop: React.FC<{ onClose: any }> = (props) => {
  return (
    <div
      id="backdrop"
      className=" fixed top-0 left-0 w-screen h-screen z-20 bg-[#000000]/[0.75] flex items-center justify-center"
      onClick={props.onClose}
    />
  );
};
const ModalOverLay: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <div
        id="modal"
        className=" fixed w-full h-full bg-[#171721] bg-opacity-0 z-[1000] inset-0"
      >
        {props.children}
      </div>
    </div>
  );
};

const Modal = (props: {
  openModal: modalType;
  children: React.ReactNode;
  onClose: any;
}) => {
  const isOpen = props.openModal;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  let portalElement = document.getElementById("overlays");
  if (!portalElement) {
    const ele = document.createElement("div");
    ele.setAttribute("id", "overlays");
    portalElement = ele;
  }

  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverLay>
          {props.children}
        </ModalOverLay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
