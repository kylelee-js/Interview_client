import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import parse from "html-react-parser";
export default function ReviewViewer() {
  const review = useAppSelector((state) => state.review.review);
  return (
    <>
      리뷰 데이터를 여기서 받아 보여준다
      {/* <div dangerouslySetInnerHTML={{ __html: review }} /> */}
      {parse(review)}
    </>
  );
}
