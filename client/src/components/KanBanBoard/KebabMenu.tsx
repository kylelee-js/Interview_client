import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMenu from "../../hooks/useMenu";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ConfirmPortals from "../Confirm/ConfirmPortal";
import ConfirmPopup from "../Confirm/ConfirmPopup";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { TagNote } from "../../styles/boardStyle";

const RedSpan = styled.span`
  color: red;
`;

type MenuType = {
  id: number;
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
  type: string;
  // FIXME: 일단은 undefined 허용 -> 나중에 더미 데이터 수정
  isFailed: boolean | undefined;
  isFixed: boolean | undefined;
};

export default React.memo(function KebabMenu({
  id,
  status,
  applicantIndex,
  isFailed,
  isFixed,
  type,
}: MenuType) {
  const [popupOpened, setPopupOpened] = useState(false);
  const { handleFail, handleFix, handleRollBack, handleUnfix } = useMenu(
    "" + (+status - 1),
    applicantIndex
  );
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/applicant/${id}`);
  };

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
    console.log(status, applicantIndex);
    setAnchorEl(null);
  };
  const removeApplicant = () => {
    console.log(status, applicantIndex);
    togglePopupOpen();
    handleFail();
  };

  const [tagOpen, setTagOpen] = useState(false);

  const tagModalOpen = () => {
    setTagOpen(true);
  };

  const tagModalClose = () => {
    setTagOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
      {type == "pool" ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={onNavigate}>지원자 정보보기</MenuItem>
          {/* TODO: 태그노트 개수가 3개 이상이면 버튼 비활성화 + 태그 삭제 기능? "disabled={ TagNote.length == 3 ? true: false}" */}
          <MenuItem onClick={tagModalOpen}>지원자 태그추가</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={onNavigate}>지원자 리뷰작성</MenuItem>

          {/* TODO: 태그노트 개수가 3개 이상이면 버튼 비활성화 + 태그 삭제 기능? "disabled={ TagNote.length == 3 ? true: false}" */}
          <MenuItem onClick={tagModalOpen}>지원자 태그추가</MenuItem>
          {isFailed ? (
            <MenuItem
              onClick={() => {
                handleRollBack();
                handleClose();
              }}
            >
              <RedSpan>지원자 탈락철회</RedSpan>
            </MenuItem>
          ) : (
            <div>
              <MenuItem onClick={togglePopupOpen}>
                <RedSpan>지원자 탈락처리</RedSpan>
              </MenuItem>
              {isFixed ? (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleUnfix();
                  }}
                >
                  <b>지원자 잠금해제</b>{" "}
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleFix();
                  }}
                >
                  <b>지원자 이동잠금</b>{" "}
                </MenuItem>
              )}
            </div>
          )}
        </Menu>
      )}

      {/* FIXME: 컴포넌트 추출하기 */}
      <Dialog
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
          <Button
            onClick={() => {
              togglePopupOpen();
              handleClose();
            }}
            autoFocus
          >
            아니오
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={tagOpen} onClose={tagModalClose}>
        <DialogTitle>태그 작성</DialogTitle>
        <DialogContent>
          <DialogContentText>
            지원자당 태그는 3개 까지 작성하실 수 있습니다.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="#태그작성"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={tagModalClose}>취소</Button>
          <Button onClick={tagModalClose}>작성</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
