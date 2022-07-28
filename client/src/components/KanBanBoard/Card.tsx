import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Menu, MenuItem } from "@mui/material/";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import KebabMenu from "./KebabMenu";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { Tooltip } from "@mui/material";
import { CardWrapper, MenuButtonDiv, TagNote } from "../../styles/boardStyle";
import { useAppDispatch } from "../../store";
import { onTagDelete } from "./kanbanSlice";
import { onDeleteTag } from "../../api/boardUpdate";

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
  tags,
  department,
  boardStatus,
  type,
  job,
  isFailed = false,
  isFixed = false,
}: CardProps) {
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
    await onDeleteTag(tagId!, id);
    dispatch(onTagDelete({ boardStatus, applicantIndex, tagId }));
    handleClose();
  };

  return (
    // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
    <Draggable
      key={applicantName}
      index={applicantIndex}
      draggableId={"" + applicantName}
      // TODO: 이 옵션 크고 끄게 할 수 있도록
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
                    {myPageBoards[+boardStatus]}
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
                  <MenuItem onClick={onTagDeleteClick}>태그 삭제하기</MenuItem>
                </Menu>

                <MenuButtonDiv>
                  <CardActions>
                    <KebabMenu
                      type={type}
                      id={id}
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
      }}
    </Draggable>
  );
});
