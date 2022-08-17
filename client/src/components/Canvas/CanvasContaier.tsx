import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Canvas from "./Canvas";
import TextContainer from "./TextContainer";

const Wrapper = styled.div`
  height: 55000px;
  width: 100%;
`;

export const BASE_IMAGE_URL =
  "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large";

const frameCount: number[] = [148, 132, 89, 139, 140, 177, 69, 90, 235, 290];

const intervalArr: number[] = [
  0, 4904, 9278, 12227, 16833, 21472, 27337, 29623, 32605, 40392, 50001,
];

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

const wordFlip = keyframes`
  0%{
    opacity: 0;
  }
  50%, 80%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
const IntroWord = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1000;
  color: white;
  font-weight: 700;
  letter-spacing: 0.2rem;
  animation: ${wordFlip} 3s;
  animation-delay: calc(0.2s * var(--i));
`;

export default function CanvasContainer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const requestAnimationRef = useRef<number | null>(null);
  const [canvasIdx, setCanvasIdx] = useState<number>(-1);
  const [triggerd, setTriggered] = useState<boolean>(false);
  const [imageArr, setImageArr] = useState<HTMLImageElement[]>([]);
  const indexRef = useRef<number>(0);

  // requestAnimationFrame이 호출하는 콜백 함수
  const updateCanvas = (index: number) => {
    indexRef.current = index;
    if (index % 2 == 0) {
      setTriggered(false);
    } else {
      setTriggered(true);
    }
  };
  useEffect(() => {
    setCanvasIdx(indexRef.current);
    console.log("canvasIdx : ", canvasIdx);
  }, [triggerd]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // FIXME: scrollTop switch로 캔버스 인덱스만 교체
    // const canvasIndex = Math.min(9, Math.floor(scrollFraction * 10));
    let canvasIndex = 0;
    switch (true) {
      case intervalArr[1] > scrollTop:
        break;
      case intervalArr[1] <= scrollTop && intervalArr[2] > scrollTop:
        canvasIndex = 1;
        break;
      case intervalArr[2] <= scrollTop && intervalArr[3] > scrollTop:
        canvasIndex = 2;
        break;
      case intervalArr[3] <= scrollTop && intervalArr[4] > scrollTop:
        canvasIndex = 3;
        break;
      case intervalArr[4] <= scrollTop && intervalArr[5] > scrollTop:
        canvasIndex = 4;
        break;
      case intervalArr[5] <= scrollTop && intervalArr[6] > scrollTop:
        canvasIndex = 5;
        break;
      case intervalArr[6] <= scrollTop && intervalArr[7] > scrollTop:
        canvasIndex = 6;
        break;
      case intervalArr[7] <= scrollTop && intervalArr[8] > scrollTop:
        canvasIndex = 7;
        break;
      case intervalArr[8] <= scrollTop && intervalArr[9] > scrollTop:
        canvasIndex = 8;
        break;
      case intervalArr[9] <= scrollTop:
        canvasIndex = 9;
        break;
      default:
        break;
    }

    // requestID 값을 반환한다.
    requestAnimationRef.current = requestAnimationFrame((time) => {
      updateCanvas(canvasIndex);
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "black";

    // 이미지 프리 로딩
    (() => {
      // persistent context - in memory : detached HTMLImageElement
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < frameCount[i]; j++) {
          const image = new Image();
          image.src = `${BASE_IMAGE_URL}/${imageTag[i]}/${j
            .toString()
            .padStart(4, "0")}.jpg`;
          setImageArr((prev) => [...prev, image]);
        }
      }
    })();

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.backgroundColor = "white";
      cancelAnimationFrame(requestAnimationRef.current!);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Typography fontSize={"70px"}>
        <IntroWord>어서오세요 새로운 에어팟 프로</IntroWord>
      </Typography>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        return (
          <div key={i}>
            {/* TODO: opacity & z-index를 start와 end로 조절 가능하도록 */}
            {canvasIdx == i && (
              <Canvas
                canvasIdx={i}
                startY={intervalArr[i]}
                endY={intervalArr[i + 1]}
              >
                <TextContainer canvasIdx={canvasIdx} />
              </Canvas>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
}
