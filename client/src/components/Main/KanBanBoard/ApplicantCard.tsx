import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KebabMenu from "./KebabMenu";

type CardProps = {
  name: string;
  index: number;
};

export default React.memo(function ApplicantCard({ name, index }: CardProps) {
  return (
    <Draggable key={index} index={index} draggableId={"" + index}>
      {(provided) => (
        <Box
          sx={{ minWidth: 275 }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card variant="outlined">
            <CardContent>
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
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <KebabMenu />
            </CardActions>
          </Card>
        </Box>
      )}
    </Draggable>
  );
});
