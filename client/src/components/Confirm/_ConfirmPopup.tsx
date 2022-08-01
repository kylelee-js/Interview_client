import React, { useState } from "react";
import styled from "styled-components";
import useMenu from "../../hooks/useMenu";
import { useAppSelector } from "../../store";
import { Confirm, ConfirmWrapper, Overlay } from "../../styles/confirmStyle";

// TODO: 재사용 용이하게 코드 수정하기

type ConfirmPropsType = {
  isShown: boolean;
  onPopupClose: () => void;
  status: string;
  applicantIndex: number;
};

export default React.memo(function ConfirmPopup({
  isShown,
  onPopupClose,
  status,
  applicantIndex,
}: ConfirmPropsType) {
  const name = useAppSelector(
    (state) => state.kanban[+status].applicants[applicantIndex].applicantName
  );
  // const { handleFail } = useMenu(status, applicantIndex);
  const removeApplicant = () => {
    onPopupClose();
    // handleFail();
  };
  return (
    <ConfirmWrapper isShown={isShown}>
      <Overlay onClick={onPopupClose}></Overlay>
      <Confirm>
        <div>{name} 지원자를 탈락시키시겠습니까?</div>
        <div>
          <button onClick={removeApplicant}>지원자 탈락</button>
          <button onClick={onPopupClose}>아니오</button>
        </div>
      </Confirm>
    </ConfirmWrapper>
  );
});
