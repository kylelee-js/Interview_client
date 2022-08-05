import { useEffect, useRef } from "react";

const useInterval = (callback: () => unknown, delay: number | null) => {
  const savedCallback = useRef(callback);

  // 콜백함수가 달라져도 대처 가능. -> Ref기 때문에
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) {
      return;
    }

    // 첫 리로드시 실행
    savedCallback.current();
    const timeId = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(timeId);
  }, [delay]);
};

export default useInterval;
