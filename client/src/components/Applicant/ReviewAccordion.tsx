import { styled } from "@mui/material/styles";
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

const Accordion = styled((props: AccordionProps) => (
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

const AccordionSummary = styled((props: AccordionSummaryProps) => (
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default React.memo(function ReviewAccordion() {
  const { reviewData } = useAppSelector((state) => state.review);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string | false>(
    reviewData[0].applicantStatus
  );
  const user = useAppSelector((state) => state.auth.user);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {reviewData.map((data) => {
        const hadReviewed = data.statusReviewData.find(
          (sRD) => sRD.userId === user?.pk!
        );

        return (
          <Accordion
            expanded={expanded === data.applicantStatus}
            onChange={handleChange(data.applicantStatus)}
            key={data.applicantStatus}
          >
            <AccordionSummary
              aria-controls={`${data.applicantStatus}-content`}
              id={`${data.applicantStatus}-header`}
            >
              <Typography>{data.applicantStatus}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.statusReviewData.map((statusReviewData) => (
                <ReviewView
                  key={statusReviewData.userId}
                  userPk={user?.pk!}
                  data={data}
                  statusReviewData={statusReviewData}
                />
              ))}
              <ReviewEditorMenu
                applicantStatus={data.applicantStatus}
                setIsEditMode={setIsEditMode}
                menuShown={hadReviewed ? false : true}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
});
