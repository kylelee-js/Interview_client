import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useResize from "../../hooks/useResize";
import { BASE_IMAGE_URL } from "./CanvasContaier";

const CanvasWrapper = styled.div<{ zIndex: number; opacity: number }>`
  position: fixed;
  /* z-index: ${(props) => props.zIndex}; */
  opacity: ${(props) => props.opacity};
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  max-width: 100vw;
`;

const AirPodsCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const frameCount: number[] = [148, 132, 89, 139, 140, 177, 69, 90, 235, 290];
const frameSum = frameCount.reduce((a, b) => a + b);

const imageTag: string[] = [
  "01-hero-lightpass",
  "02-head-bob-turn",
  "03-flip-for-guts",
  "04-explode-tips",
  "05-flip-for-nc",
  "06-transparency-head",
  "07-flip-reveal-guts",
  "08-turn-for-chip",
  "09-scoop-turn",
  "10-fall-into-case",
];

type CanvasPropsType = {
  // imageTag: string;
  // frameCount: number;
  children: React.ReactNode;
  canvasIdx: number;
  startY: number;
  endY: number;
};
export default function Canvas({
  // imageTag,
  // frameCount,
  startY,
  children,
  canvasIdx,
  endY,
}: CanvasPropsType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null); // 뷰포트 해상도를 담을 수 있어야함
  const requestAnimationRef = useRef<number | null>(null); // clear 해주기 위해서 requestID 값을 기억하는 ref

  // 뷰포트 (100vw, 100vh)를 통해 resize로 인한 캔버스 해상도를 자동 변경
  const { width, height } = useResize(canvasWrapperRef);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    const image = new Image();
    // TODO: 스크롤 단계에 따라 어떻게 ? 태그 전환? - 여러개의 캔버스로 노가다? 10개인데...
    const index: number = 1;
    image.src = `${BASE_IMAGE_URL}/${imageTag[canvasIdx]}/${index
      .toString()
      .padStart(4, "0")}.jpg`;

    // 첫화면 렌더 시 적용할 이미지
    image.onload = () => {
      ctx?.drawImage(
        image,
        0,
        0,
        canvasRef.current?.width!,
        canvasRef.current?.height!
      );
    };

    // 해상도 조정 - 해상도를 맞출 화면 값(100vw, 100vh) ref로 받아오기
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    // requestAnimationFrame이 호출하는 콜백 함수 -> 실질적인 애니메이션 업데이트 함수
    const updateCanvas = (index: number) => {
      // if (canvasWrapperRef.current) {
      //   const currentScrollY = window.scrollY;
      //   const start = startY;
      //   const interval = endY - startY;
      //   // TODO: 로그 함수 등을 활용해서 처음과 끝에만 페이드 효과주기 - 지금은 정규화 함수
      //   const normalized = (interval - (currentScrollY - start)) / interval;
      //   canvasWrapperRef.current.style.opacity = (
      //     1 - Math.abs(normalized)
      //   ).toString();
      //   canvasWrapperRef.current.style.transform = `matrix(1, 0, 0, 1, 0, ${
      //     40 * normalized
      //   })`;
      // }
      image.src = `${BASE_IMAGE_URL}/${imageTag[canvasIdx]}/${(index < 1
        ? 1
        : index
      )
        .toString()
        .padStart(4, "0")}.jpg`;
      ctx?.drawImage(
        image,
        0,
        0,
        canvasRef.current?.width!,
        canvasRef.current?.height!
      );
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY - startY;
      const maxScrollTop = endY - startY;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount[canvasIdx] - 1,
        Math.floor(scrollFraction * frameCount[canvasIdx])
      );

      console.log(`
        scrollTop : ${scrollTop} (${window.scrollY} - ${startY})
        maxScroll : ${maxScrollTop}
        frameIndex : ${frameIndex}
      `);
      // requestID 값을 반환한다.
      requestAnimationRef.current = requestAnimationFrame((time) => {
        updateCanvas(frameIndex);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestAnimationRef.current!);
    };
  }, [width, height, canvasIdx]);

  return (
    <CanvasWrapper ref={canvasWrapperRef} zIndex={10 - canvasIdx} opacity={1}>
      <AirPodsCanvas ref={canvasRef} />
      {children}
    </CanvasWrapper>
  );
}
