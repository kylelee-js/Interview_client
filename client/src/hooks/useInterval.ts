import { useEffect, useRef } from "react";

const useInterval = (callback: () => unknown, delay: number | null) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
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
