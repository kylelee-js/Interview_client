import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useConfirm from "../../hooks/useConfirm";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ConfirmPortals from "../Confirm/ConfirmPortal";
import ConfirmPopup from "../Confirm/ConfirmPopup";

const RedSpan = styled.span`
  color: red;
`;

type MenuType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};

export default React.memo(function KebabMenu({
  status,
  applicantIndex,
}: MenuType) {
  const [popupOpened, setPopupOpened] = useState(false);
  const togglePopupOpen = () => {
    setPopupOpened((prev) => !prev);
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        {/* TODO: 만약 Pool 페이지라면 태그 추가가 아닌 지원자 등록처리 메뉴가 있어야한다. */}
        <MenuItem onClick={handleClose}>지원자 태그추가</MenuItem>
        <MenuItem onClick={togglePopupOpen}>
          <RedSpan>지원자 탈락처리</RedSpan>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <b>지원자 이동잠금</b>{" "}
        </MenuItem>
      </Menu>

      {/* FIXME: 조건문으로 감싸면 - 렌더링이 줄어든다! 하지만 애니메이션은 어떻게?? */}
      {popupOpened && (
        <ConfirmPortals>
          <ConfirmPopup
            isShown={popupOpened}
            onPopupClose={togglePopupOpen}
            status={status}
            applicantIndex={applicantIndex}
          />
        </ConfirmPortals>
      )}

      {/* FIXME: 너무 MUI에 의존적임..  */}
      {/* <Dialog
        open={popupOpened}
        onClose={togglePopupOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"해당 지원자를 탈락시키시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            탈락 처리된 지원자는 하단 창에서 확인하실 수 있습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={removeApplicant}>탈락 처리</Button>
          <Button onClick={handleClose} autoFocus>
            아니오
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
});
