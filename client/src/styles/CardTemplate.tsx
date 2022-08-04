import {
  Alert,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Menu,
  MenuItem,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import { ApplicantDataType } from "../components/Applicant/applicantSlice";
import KebabMenu from "../components/KanBanBoard/KebabMenu";
import { CheckBoxDiv, MenuButtonDiv, TagNote } from "./boardStyle";
import { useState } from "react";
import { onDeleteTag } from "../api/boardUpdate";
import { onTagDelete } from "../components/KanBanBoard/kanbanSlice";
import { useAppDispatch } from "../store";
import { onTagDeleteSearch } from "../components/Search/searchSlice";

const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

const HighlightSpan = styled.span<{ match: boolean }>`
  background-color: ${(props) => (props.match ? "yellow" : "transparent")};
`;

interface CardTemplatePropsType extends ApplicantDataType {
  status: string;
  boardStatus: string;
  applicantIndex: number;
  type: string;
  userPk: number | undefined;
  keyword: string;
}

export default function CardTemplate({
  id,
  applicantName,
  applicantIndex,
  tags,
  department,
  status,
  boardStatus,
  interviewer,
  type,
  job,
  isFailed = false,
  isFixed = false,
  interviewDate = null,
  userPk,
  keyword,
}: CardTemplatePropsType) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tagId, setTagId] = useState<number>();
  const open = Boolean(anchorEl);
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
    if (type == "myapplicants") {
      dispatch(onTagDelete({ boardStatus, applicantIndex, tagId }));
    } else if (type == "search") {
      dispatch(onTagDeleteSearch({ applicantIndex, tagId }));
    }
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            borderRadius: "3px",
          }}
          color="text.secondary"
          gutterBottom
        >
          {type == "search" ? (
            <>
              <HighlightSpan match={department.indexOf(keyword) > -1}>
                {department}
              </HighlightSpan>
              -
              <HighlightSpan match={job.indexOf(keyword) > -1}>
                {job}
              </HighlightSpan>
            </>
          ) : (
            <>
              {department} - {job}
            </>
          )}
        </Typography>
        <Typography variant="h5" component="div">
          {type == "search" ? (
            <HighlightSpan match={applicantName.indexOf(keyword) > -1}>
              {applicantName}
            </HighlightSpan>
          ) : (
            <>{applicantName}</>
          )}
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
            <TagNote key={tag.id} id={"" + tag.id} onClick={onTagClick}>
              <HighlightSpan
                style={{
                  color:
                    tag.tagText.indexOf(keyword) > -1 ? "black" : "inherit",
                }}
                match={tag.tagText.indexOf(keyword) > -1}
              >
                #{tag.tagText}
              </HighlightSpan>
            </TagNote>
          ))}
        </Typography>
        {interviewDate && (
          <Typography
            sx={{
              position: "relative",
              fontSize: "12px",
              marginTop: 2,
              marginBottom: 0,
            }}
            color="text.secondary"
          >
            <span
              style={{
                color: new Date() > new Date(interviewDate) ? "red" : "inherit",
              }}
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
            </span>
            {new Date().getDate() == new Date(interviewDate).getDate() &&
              new Date().getMonth() == new Date(interviewDate).getMonth() && (
                <PersonPinCircleIcon
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "0px",
                  }}
                  fontSize="small"
                />
              )}
          </Typography>
        )}
      </CardContent>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
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
      {/* {type == "pool" && (
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
          )} */}

      <MenuButtonDiv>
        <CardActions>
          <KebabMenu
            type={type}
            id={id}
            status={type == "myapplicants" ? boardStatus : status}
            isMine={Boolean(
              interviewer?.find((interviewer) => interviewer.pk === userPk!)
            )}
            applicantIndex={applicantIndex}
            isFailed={isFailed}
            isFixed={isFixed}
            tags={tags}
          />
        </CardActions>
      </MenuButtonDiv>
    </Card>
  );
}
