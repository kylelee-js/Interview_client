import { styled as styledMui } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useAppSelector } from "../../store";
import ReviewView from "./ReviewView";
import ReviewEditorMenu from "./ReviewEditorMenu";
import { ReviewDataType } from "./reviewSlice";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
`;

const Accordion = styledMui((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const processStatus = [
  "미등록",
  "서류전형 리뷰",
  "1차 인터뷰",
  "2차 인터뷰",
  "최종면접",
];
const AccordionSummary = styledMui((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styledMui(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type ReviewAccordionPropsType = {
  reviewData: ReviewDataType[];
  amIAnAuthor: boolean;
};
//
export default React.memo(function ReviewAccordion({
  reviewData,
  amIAnAuthor,
}: ReviewAccordionPropsType) {
  const [expanded, setExpanded] = useState<string | false>(
    reviewData.length > 0 ? "" + reviewData[0].applicantStatus : false
  );
  const user = useAppSelector((state) => state.auth.user);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [updatedReview, setupdatedReview] =
    useState<ReviewDataType[]>(reviewData);
  const checkReview = useAppSelector((state) => state.review.reviewData);

  useDidMountEffect(() => {
    setupdatedReview(checkReview);
  }, [checkReview]);

  if (reviewData.length == 0) return <>노 리뷰</>;
  return (
    <Wrapper>
      {updatedReview.map((data) => {
        const hadReviewed = data.statusReviewData.find(
          (sRD) => sRD.userId == user?.pk!
        );
        return (
          <Accordion
            expanded={expanded === "" + data.applicantStatus}
            onChange={handleChange("" + data.applicantStatus)}
            key={data.applicantStatus}
          >
            <AccordionSummary
              aria-controls={`${data.applicantStatus}-content`}
              id={`${data.applicantStatus}-header`}
            >
              <Typography>{processStatus[+data.applicantStatus]}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.statusReviewData.length == 0 && (
                <Typography>아직 리뷰가 없습니다.</Typography>
              )}
              {data.statusReviewData.map((statusReviewData) => (
                <ReviewView
                  key={statusReviewData.id}
                  id={statusReviewData.id}
                  userPk={user?.pk!}
                  data={data}
                  statusReviewData={statusReviewData}
                />
              ))}
              <ReviewEditorMenu
                applicantStatus={data.applicantStatus}
                menuShown={
                  amIAnAuthor ? (Boolean(hadReviewed) ? false : true) : false
                }
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
});
