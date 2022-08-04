import React, { useEffect, useState } from "react";
import { Alert, Box, Menu, MenuItem, Snackbar } from "@mui/material/";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import KebabMenu from "../../KanBanBoard/KebabMenu";
import { ApplicantDataType } from "../../Applicant/applicantSlice";
import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import { setApplicantMine } from "../../../api/fetchApplicant";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  CardWrapper,
  CheckBoxDiv,
  MenuButtonDiv,
  TagNote,
} from "../../../styles/boardStyle";
import { onTagDelete, onToggleMyApplicant } from "../poolSlice";
import { onDeleteTag } from "../../../api/boardUpdate";

const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

interface CardProps extends ApplicantDataType {
  boardStatus: string;
  applicantIndex: number;
  type: string;
}

export default React.memo(function Card({
  id,
  applicantName,
  applicantIndex,
  tags = [{ id: -1, tagText: "없음" }],
  department,
  boardStatus,
  status,
  type,
  job,
  interviewer,
  isFailed = false,
  isFixed = false,
  interviewDate = null,
}: CardProps) {
  // TODO: 각 지원자 별로 setMine bool 값을 받아오기
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const dispatch = useAppDispatch();
  const [isMine, setIsMine] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tagId, setTagId] = useState<number>();
  const openTag = Boolean(anchorEl);
  const onTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTagId(+event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onTagDeleteClick = async () => {
    handleClose();
    await onDeleteTag(tagId!, id);
    dispatch(onTagDelete({ boardStatus, applicantIndex, tagId }));
  };

  useEffect(() => {
    if (interviewer?.find((viewer) => viewer.pk == userPk)) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  }, []);

  // TODO: 기본값은 isMine을 따른다 Alert 띄우는 모달
  const [open, setOpen] = useState(false);
  const [openOpp, setOpenOpp] = useState(false);
  const onSetMine = () => {
    if (!isMine) {
      dispatch(
        onToggleMyApplicant({ boardStatus, applicantIndex, userPk, isMine })
      );
    } else {
      dispatch(
        onToggleMyApplicant({ boardStatus, applicantIndex, userPk, isMine })
      );
    }

    setApplicantMine("" + id, !isMine);
  };
  const onCheckClick = () => {
    // TODO:  set Toggler - 지금 개판임..
    if (!isMine) setOpen(true);
    if (isMine) setOpen(false);
    if (!isMine) setOpenOpp(false);
    if (isMine) setOpenOpp(true);
    setIsMine((prev) => !prev);
    onSetMine();
  };

  return (
    <CardWrapper>
      <Box
        sx={{
          minWidth: 250,
          maxWidth: 320,
          width: "90%",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <MuiCard variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {department} - {job}
            </Typography>
            <Typography variant="h5" component="div">
              {applicantName}{" "}
              {isFailed && (
                <Tooltip title="해당 지원자는 전형 탈락상태입니다.">
                  <BlockIcon color="error" sx={{ verticalAlign: "text-top" }} />
                </Tooltip>
              )}{" "}
              {isFixed && (
                <Tooltip title="해당 지원자는 검토 중입니다.">
                  <LockIcon sx={{ verticalAlign: "text-top" }} />
                </Tooltip>
              )}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {myPageBoards[+status]}
            </Typography>
            <Typography variant="body2">
              {tags?.map((tag) => (
                <TagNote onClick={onTagClick} key={tag.id} id={"" + tag.id}>
                  #{tag.tagText}
                </TagNote>
              ))}
            </Typography>

            {interviewDate && (
              <Typography
                sx={{ fontSize: "12px", marginTop: 2, marginBottom: 0 }}
                color="text.secondary"
              >
                면접예정일 :{" "}
                {new Date(interviewDate)?.toLocaleString("ko-KR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </Typography>
            )}
          </CardContent>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openTag}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              disabled={
                !Boolean(
                  interviewer?.find((interviewer) => interviewer.pk === userPk!)
                )
              }
              onClick={onTagDeleteClick}
            >
              태그 삭제하기
            </MenuItem>
          </Menu>

          {type == "pool" && (
            // TODO: 체크박스
            <CheckBoxDiv>
              <Checkbox
                checked={isMine}
                color="default"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                onClick={onCheckClick}
              />
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
              >
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                >
                  해당 지원자의 면접관으로 등록하셨습니다.
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openOpp}
                onClose={() => setOpenOpp(false)}
                autoHideDuration={2000}
              >
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="info">
                  해당 지원자의 면접관 등록을 해제하셨습니다.
                </Alert>
              </Snackbar>
            </CheckBoxDiv>
          )}

          <MenuButtonDiv>
            <CardActions>
              <KebabMenu
                tags={tags}
                type={type}
                id={id}
                isMine={Boolean(
                  interviewer?.find((interviewer) => interviewer.pk === userPk!)
                )}
                status={boardStatus}
                applicantIndex={applicantIndex}
                isFailed={isFailed}
                isFixed={isFixed}
              />
            </CardActions>
          </MenuButtonDiv>
        </MuiCard>
      </Box>
    </CardWrapper>
  );
});
