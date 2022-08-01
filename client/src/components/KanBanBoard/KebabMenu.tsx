import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMenu from "../../hooks/useMenu";
import { useNavigate } from "react-router-dom";
import FailApplicantPopup from "../Popup/FailApplicantPopup";
import TagNotePopup from "../Popup/TagNotePopup";
import { TagDataType } from "../Applicant/applicantSlice";

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
  isMine: boolean;
  isFixed: boolean | undefined;
  tags: TagDataType[] | undefined;
};

export default React.memo(function KebabMenu({
  id,
  status,
  tags,
  applicantIndex,
  isMine,
  isFailed,
  isFixed,
  type,
}: MenuType) {
  const [popupOpened, setPopupOpened] = useState(false);
  const { handleFail, handleFix } = useMenu({
    status: "" + (+status - 1),
    applicantIndex,
    isFailed: Boolean(isFailed),
    isFixed: Boolean(isFixed),
  });
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

          <MenuItem
            disabled={tags?.length == 3 || !isMine}
            onClick={tagModalOpen}
          >
            지원자 태그추가
          </MenuItem>
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

          <MenuItem disabled={tags?.length == 3} onClick={tagModalOpen}>
            지원자 태그추가
          </MenuItem>
          {isFailed ? (
            <MenuItem
              onClick={() => {
                handleFail();
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
                    handleFix();
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

      <FailApplicantPopup
        open={popupOpened}
        togglePopupOpen={togglePopupOpen}
        removeApplicant={removeApplicant}
        handleClose={handleClose}
      />
      <TagNotePopup
        open={tagOpen}
        tagModalClose={tagModalClose}
        applicantId={id}
        boardStatus={status}
        applicantIndex={applicantIndex}
        tags={tags}
      />
    </div>
  );
});
