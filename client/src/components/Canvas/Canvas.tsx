import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useResize from "../../hooks/useResize";

const Wrapper = styled.div`
  /* 한 백배로 넣어서 캔버스 전환? */
  height: 14000px;
  /* height: 100vh; */
  width: 100%;
`;

const CanvasWrapper = styled.div`
  position: fixed;
  z-index: -10;
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

const FixedText = styled.div<{ scrollHeight: number }>`
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const BASE_IMAGE_URL =
  "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large";

const frameCount: number[] = [148, 132, 89, 139, 140, 177, 69, 90, 235, 290];

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

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null); // 뷰포트 해상도를 담을 수 있어야함
  const requestAnimationRef = useRef<number | null>(null); // clear 해주기 위해서 requestID 값을 기억하는 ref
  const fixedTextRef = useRef<HTMLDivElement>(null); // 스크롤에 따른 인터렉션을 주기 위한 ref

  // 뷰포트 (100vw, 100vh)를 통해 resize로 인한 캔버스 해상도를 자동 변경
  const { width, height } = useResize(canvasWrapperRef);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    document.body.style.backgroundColor = "black";

    const image = new Image();
    // TODO: 스크롤 단계에 따라 어떻게 ? 태그 전환? - 여러개의 캔버스로 노가다? 10개인데...
    const index: number = 1;
    image.src = `${BASE_IMAGE_URL}/${imageTag[0]}/${index
      .toString()
      .padStart(4, "0")}.jpg`;

    // 첫화면 렌더 시 적용할 이미지
    image.onload = () => {
      ctx?.drawImage(
        image,
        canvasRef.current?.width! / 5 / 2,
        canvasRef.current?.height! / 5 / 2,
        (canvasRef.current?.width! * 4) / 5,
        (canvasRef.current?.height! * 4) / 5
      );
    };

    // 해상도 조정 - 해상도를 맞출 화면 값(100vw, 100vh) ref로 받아오기
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    // requestAnimationFrame이 호출하는 콜백 함수 -> 실질적인 애니메이션 업데이트 함수
    const updateCanvas = (index: number) => {
      if (index == 0) {
        image.src = `${BASE_IMAGE_URL}/${imageTag[0]}/${(1)
          .toString()
          .padStart(4, "0")}.jpg`;
      } else {
        image.src = `${BASE_IMAGE_URL}/${imageTag[0]}/${index
          .toString()
          .padStart(4, "0")}.jpg`;
      }

      // 텍스트 인터렉션
      if (fixedTextRef.current) {
        fixedTextRef.current.style.opacity =
          // TODO: 로그 함수 등을 활용해서 인터렉션 강화하기
          (1 - Math.abs((74 - index) / 74)).toString();
        fixedTextRef.current.style.top = "" + (index + 200) + "px";
        // fixedTextRef.current.style.left = "" + (index + 200) + "px";
      }
      ctx?.drawImage(
        image,
        canvasRef.current?.width! / 5 / 2,
        canvasRef.current?.height! / 5 / 2,
        (canvasRef.current?.width! * 4) / 5,
        (canvasRef.current?.height! * 4) / 5
      );
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop =
        wrapperRef.current?.scrollHeight! - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount[0] - 1,
        Math.floor(scrollFraction * frameCount[0])
      );

      // requestID 값을 반환한다.
      requestAnimationRef.current = requestAnimationFrame((time) => {
        updateCanvas(frameIndex);
      });
      console.log(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestAnimationRef.current!);
      document.body.style.backgroundColor = "white";
    };
  }, [width, height]);

  return (
    <Wrapper ref={wrapperRef}>
      <CanvasWrapper ref={canvasWrapperRef}>
        <AirPodsCanvas ref={canvasRef} />
        <FixedText
          ref={fixedTextRef}
          id="FixedText"
          scrollHeight={frameCount[0]}
        >
          스크롤에 따라 사라지는 텍스트
        </FixedText>
      </CanvasWrapper>
    </Wrapper>
  );
}
