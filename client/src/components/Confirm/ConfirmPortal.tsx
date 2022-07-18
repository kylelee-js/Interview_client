import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
type PortalPropsType = {
  children: ReactNode;
};

export default function ConfirmPortals({ children }: PortalPropsType) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (document) {
      const popupElement = document.querySelector("#popup") as HTMLElement;
      ref.current = popupElement; // ref에 dom 값 전달
    }
  }, []);
  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    console.log("asdasd");
    return ReactDOM.createPortal(children, ref.current);
  }
  return null;
}
