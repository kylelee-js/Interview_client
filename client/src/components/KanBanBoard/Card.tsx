import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KebabMenu from "./KebabMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const TagNote = styled.span`
  font-size: 12px;
  padding: 1px 5px;
  margin-right: 10px;
  background-color: grey;
  color: white;
  border-radius: 5px;
`;

const MenuButtonDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

type CardProps = {
  name: string;
  index: number;
  tags: string[] | [];
  status: string;
};

export default React.memo(function Card({
  name,
  index,
  tags,
  status,
}: CardProps) {
  // FIXME: 이것도 컨테이너로 빼야하나?
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/applicant");
  };

  return (
    // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
    <Draggable
      key={name}
      index={index}
      draggableId={"" + name}
      // TODO: 이 옵션 크고 끄게 할 수 있도록
      // isDragDisabled={true}
    >
      {(provided, snapshot) => {
        const style = {
          cursor: snapshot.isDragging ? "grab" : "pointer",
          ...provided.draggableProps.style,
        };
        return (
          <Wrapper>
            <Box
              sx={{ minWidth: 275 }}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
            >
              <MuiCard variant="outlined">
                <CardContent onClick={onClick}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    지원자
                  </Typography>
                  <Typography variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    {/* TODO: 태그노트 스타일링하기!! */}
                    well meaning and kindly.
                    <br />
                    {tags.map((tag) => (
                      <TagNote key={tag}>"#{tag}"</TagNote>
                    ))}
                  </Typography>
                </CardContent>

                <MenuButtonDiv>
                  <CardActions>
                    <KebabMenu status={status} applicantIndex={index} />
                  </CardActions>
                </MenuButtonDiv>
              </MuiCard>
            </Box>
          </Wrapper>
        );
      }}
    </Draggable>
  );
});
