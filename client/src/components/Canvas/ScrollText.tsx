import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FixedText = styled.div<{ position: number[] }>`
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: fixed;
  left: ${(props) => 50 - props.position[0]}%;
  top: ${(props) => 50 - props.position[1]}%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

export type ScrollTextPropsType = {
  children: React.ReactNode;
  start: number;
  position: number[];
  interval?: number;
  fontSize?: number;
};
const ScrollText = (props: ScrollTextPropsType) => {
  const { children, start, position, interval = 2000, fontSize = 34 } = props;
  const requestAnimationRef = useRef<number | null>(null); // clear 해주기 위해서 requestID 값을 기억하는 ref
  const scrollTextRef = useRef<HTMLDivElement>(null); // 스크롤에 따른 인터렉션을 주기 위한 ref

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationRef.current = requestAnimationFrame((time) => {
        if (scrollTextRef.current) {
          const currentScrollY = window.scrollY;
          const startY = start;
          const normalized = (interval - (currentScrollY - startY)) / interval;
          scrollTextRef.current.style.opacity =
            // TODO: 로그 함수 등을 활용해서 인터렉션 강화하기
            (1 - Math.abs(normalized)).toString();
          scrollTextRef.current.style.transform = `matrix(1, 0, 0, 1, 0, ${
            40 * normalized
          })`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestAnimationRef.current!);
    };
  }, []);

  return (
    <FixedText ref={scrollTextRef} position={position}>
      <Typography component={"div"} fontSize={`${fontSize}px`}>
        {children}
      </Typography>
    </FixedText>
  );
};

export default ScrollText;
