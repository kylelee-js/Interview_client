import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";

const Wrapper = styled.div`
  width: 100%;
`;

export default function Main() {
  return (
    <Wrapper>
      <KanBanContainer type="myapplicants" />
    </Wrapper>
  );
}
