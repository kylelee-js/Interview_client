import { Box, Modal, Typography } from "@mui/material";

// TODO: 스타일링하기
const popupStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 100,
  bgcolor: "background.paper",
  borderRadius: "5px",
  // border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

type ReviewNullWarningPopupPropsType = {
  open: boolean;
  handleClose: () => void;
};

export default function ReviewNullWarningPopup({
  open,
  handleClose,
}: ReviewNullWarningPopupPropsType) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={popupStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          리뷰를 작성하고 제출해주세요.
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          빈칸으로 작성된 리뷰는 제출될 수 없습니다.
        </Typography>
      </Box>
    </Modal>
  );
}
