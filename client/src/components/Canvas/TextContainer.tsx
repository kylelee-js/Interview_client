import ScrollText from "./ScrollText";

type TextContainerPropsType = {
  canvasIdx: number;
};
export default function TextContainer({ canvasIdx }: TextContainerPropsType) {
  // TODO: switch문으로 스크롤 텍스트 교체해주기
  return (
    <>
      {canvasIdx == 0 && (
        <>
          <ScrollText start={0} position={[10, 10]} fontSize={50}>
            <b>소개합니다</b>
            <br />
            <h1>Airpods Pro</h1>
          </ScrollText>
          <ScrollText start={3000} position={[0, 0]}>
            그 놀라운 기능
          </ScrollText>
        </>
      )}
      {canvasIdx == 1 && (
        <>
          <ScrollText start={7000} position={[1, 1]}>
            누구도 따라올 수 있는 완성도
          </ScrollText>
          <ScrollText start={8000} position={[40, 10]}>
            웅장함과 세밀함
          </ScrollText>
          <ScrollText start={9000} position={[20, -20]}>
            그리고 완벽한 동기화까지
          </ScrollText>
        </>
      )}
      {canvasIdx == 2 && (
        <>
          <ScrollText start={7000} position={[1, 1]} interval={1500}>
            누구도 따라올 수 있는 완성도
          </ScrollText>
          <ScrollText start={8000} position={[40, 10]} interval={1500}>
            웅장함과 세밀함
          </ScrollText>
          <ScrollText start={9000} position={[20, -20]} interval={1500}>
            그리고 완벽한 동기화까지
          </ScrollText>
        </>
      )}
      {canvasIdx == 3 && (
        <>
          <ScrollText start={12500} position={[35, 1]} interval={1000}>
            중간 사이즈
          </ScrollText>
          <ScrollText start={14000} position={[10, 1]} interval={1200}>
            작은 사이즈
          </ScrollText>
          <ScrollText start={14000} position={[40, 1]} interval={1200}>
            큰 사이즈의 이어팁
          </ScrollText>
        </>
      )}
      {canvasIdx == 4 && (
        <>
          <ScrollText start={24000} position={[1, 1]}>
            완벽한 노이즈 캔슬링
          </ScrollText>
          <ScrollText start={28000} position={[40, 10]}>
            그리고 완벽한 일상 청음기능까지
          </ScrollText>
        </>
      )}
      {canvasIdx == 5 && (
        <>
          <ScrollText start={22000} position={[1, 1]}>
            완벽한 노이즈 캔슬링
          </ScrollText>
          <ScrollText start={24000} position={[43, 30]}>
            <p style={{ color: "black" }}>그리고 완벽한 일상 청음기능까지</p>
          </ScrollText>
        </>
      )}
      {canvasIdx == 6 && (
        <>
          <ScrollText start={27000} position={[10, 35]} interval={1500}>
            <p style={{ color: "black" }}>최신식 애플의 칩셋 탑재</p>
          </ScrollText>
        </>
      )}
      {canvasIdx == 7 && <></>}
      {canvasIdx == 8 && <></>}
      {canvasIdx == 9 && (
        <>
          <ScrollText start={50000} position={[10, 10]}>
            <h1>감사합니다.</h1>
          </ScrollText>
        </>
      )}
    </>
  );
}
