import React, { useState, memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@mui/material/";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { CardWrapper } from "../../styles/boardStyle";
import { useAppSelector } from "../../store";
import CardTemplate from "../../styles/CardTemplate";

interface CardProps extends ApplicantDataType {
  boardStatus: string;
  applicantIndex: number;
  type: string;
}

export default memo(function Card(props: CardProps) {
  const { id, applicantIndex, type, isFixed = false } = props;
  const userPk = useAppSelector((state) => state.auth.user?.pk);
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
