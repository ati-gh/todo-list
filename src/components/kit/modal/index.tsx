import * as React from "react";

import Modal from "@mui/material/Modal";
import { Box, SxProps, Typography } from "@mui/material";
import { Theme } from "@emotion/react";

interface ModalProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  title?: string;
  open: boolean;
  onClose: () => void;
}
const BasicModal: React.FC<ModalProps> = ({
  children,
  sx,
  title,
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "15px",

          p: 4,
          ...sx,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};
export default BasicModal;
