import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "../../../store";
// import { onRemove } from "../../Applicant/ApplicantSlice";
import { onRemoveApplicant } from "./kanbanSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RedSpan = styled.span`
  color: red;
`;

type MenuType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};

export default function KebabMenu({ status, applicantIndex }: MenuType) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeApplicant = () => {
    console.log(status, applicantIndex);
    // FIXME: 커스텀 컨펌 창으로 변경하기 - 지금 너무 사용경험 안좋음
    const isRemoved = confirm("지원자를 탈락 처리하시겠습니까?");
    if (isRemoved) {
      dispatch(onRemoveApplicant({ status, applicantIndex }));
    } else {
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // FIXME: 스타일 조정하기
        sx={{ borderRadius: 8 }}
        style={{
          fontSize: "20px",
          maxWidth: "30px",
          maxHeight: "32px",
          minWidth: "30px",
          minHeight: "32px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        {/* 글자가 아니라 svg라면? */}
        <MoreVertIcon htmlColor="grey" fontSize="inherit" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>지원자 태그추가</MenuItem>
        <MenuItem onClick={removeApplicant}>
          <RedSpan>지원자 탈락처리</RedSpan>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <b>지원자 이동잠금</b>{" "}
        </MenuItem>
      </Menu>
    </div>
  );
}
