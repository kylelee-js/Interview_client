import { useCallback, useEffect, useRef, useState } from "react";

/* useIntersectionObserver.ts */

export default function useIntersectionObserver() {
  const dom = useRef(null);
  const { current } = dom;

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([e]: IntersectionObserverEntry[]) => {
      // 아직 뷰포트(root)에 노출 안됨
      if (e.intersectionRatio == 0) {
        current;
      } else if (e.isIntersecting) {
        // 원하는 이벤트를 추가 할 것
      } else if (e.intersectionRatio == 1) {
      }
    },
    []
  );

  useEffect(() => {
    if (!current) {
      return;
    }

    // config
    const observer = new IntersectionObserver(handleScroll, {
      root: null, // 디폴트는 뷰포트
      threshold: [1],
    });

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref: dom };
}
