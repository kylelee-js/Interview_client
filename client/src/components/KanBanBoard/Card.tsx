import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Menu, MenuItem } from "@mui/material/";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import KebabMenu from "./KebabMenu";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { Tooltip } from "@mui/material";
import { CardWrapper, MenuButtonDiv, TagNote } from "../../styles/boardStyle";
import { useAppDispatch, useAppSelector } from "../../store";
import { onTagDelete } from "./kanbanSlice";
import { onDeleteTag } from "../../api/boardUpdate";
import CardTemplate from "../../styles/CardTemplate";

const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

interface CardProps extends ApplicantDataType {
  boardStatus: string;
  applicantIndex: number;
  type: string;
}

export default React.memo(function Card(props: CardProps) {
  const {
    id,
    applicantName,
    applicantIndex,
    tags,
    department,
    boardStatus,
    status,
    interviewer,
    type,
    job,
    isFailed = false,
    isFixed = false,
    interviewDate = null,
  } = props;
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
    dispatch(onTagDelete({ boardStatus, applicantIndex, tagId }));
  };

  return (
    <Draggable
      key={id}
      index={applicantIndex}
      draggableId={"" + id}
      isDragDisabled={isFixed || type == "pool"}
    >
      {(provided, snapshot) => {
        const style = {
          cursor: snapshot.isDragging ? "grab" : "auto",
          PointerEvent: "none",
          ...provided.draggableProps.style,
        };
        return (
          <CardWrapper>
            <Box
              sx={{
                minWidth: 250,
                width: "90%",
                maxWidth: 320,
                position: "relative",
                boxSizing: "border-box",
              }}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
            >
              {/* <MuiCard variant="outlined">
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
                        <BlockIcon
                          color="error"
                          sx={{ verticalAlign: "text-top" }}
                        />
                      </Tooltip>
                    )}{" "}
                    {isFixed && (
                      <Tooltip title="해당 지원자는 검토 중입니다.">
                        <LockIcon sx={{ verticalAlign: "text-top" }} />
                      </Tooltip>
                    )}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {type == "myapplicants"
                      ? myPageBoards[+boardStatus]
                      : myPageBoards[+status]}
                  </Typography>
                  <Typography variant="body2">
                    {tags?.map((tag) => (
                      <TagNote
                        onClick={onTagClick}
                        key={tag.id}
                        id={"" + tag.id}
                      >
                        #{tag.tagText}
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
                          color:
                            new Date() > new Date(interviewDate)
                              ? "red"
                              : "inherit",
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

                      {new Date().getDate() ==
                        new Date(interviewDate).getDate() &&
                        new Date().getMonth() ==
                          new Date(interviewDate).getMonth() && (
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
                        interviewer?.find(
                          (interviewer) => interviewer.pk === userPk!
                        )
                      )
                    }
                    onClick={onTagDeleteClick}
                  >
                    태그 삭제하기
                  </MenuItem>
                </Menu>

                <MenuButtonDiv>
                  <CardActions>
                    <KebabMenu
                      type={type}
                      id={id}
                      status={boardStatus}
                      isMine={Boolean(
                        interviewer?.find(
                          (interviewer) => interviewer.pk === userPk!
                        )
                      )}
                      applicantIndex={applicantIndex}
                      isFailed={isFailed}
                      isFixed={isFixed}
                      tags={tags}
                    />
                  </CardActions>
                </MenuButtonDiv>
              </MuiCard> */}
              <CardTemplate
                {...props}
                type={type}
                userPk={userPk}
                keyword={"🚔"}
              />
            </Box>
          </CardWrapper>
        );
      }}
    </Draggable>
  );
});
