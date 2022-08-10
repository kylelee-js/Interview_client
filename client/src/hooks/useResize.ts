import { RefObject, useEffect, useState } from "react";

/**
 * 상위 객체나 랩퍼 엘리먼트를 ref로 담아준다.
 * @param {RefObject<HTMLElement>} ref 부모나 래퍼 엘리먼트
 * @returns {number} width-height
 */
export default function useResize(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState<number>(0);
  const [height, setheight] = useState<number>(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setheight(ref.current.clientHeight);
      }
    };
    setClientWidthHeight();

    window.addEventListener("resize", setClientWidthHeight);
    return () => {
      window.removeEventListener("resize", setClientWidthHeight);
    };
  }, []);

  return { width, height };
}
