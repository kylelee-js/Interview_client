import React from "react";
import { Box } from "@mui/material/";
import { ApplicantDataType } from "../../Applicant/applicantSlice";
import { useAppSelector } from "../../../store";
import { CardWrapper } from "../../../styles/boardStyle";
import CardTemplate from "../../../styles/CardTemplate";

interface CardProps extends ApplicantDataType {
  boardStatus: string;
  applicantIndex: number;
  type: string;
}

export default React.memo(function Card(props: CardProps) {
  console.log(props.interviewer);
  const userPk = useAppSelector((state) => state.auth.user?.pk);
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
        <CardTemplate {...props} userPk={userPk} keyword={"🚖"} />
      </Box>
    </CardWrapper>
  );
});
