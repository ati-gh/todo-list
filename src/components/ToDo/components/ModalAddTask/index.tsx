import { Box, Button, TextField } from "@mui/material";
import BasicModal from "../../../kit/modal";
import { ModalPropsTask } from "../../toDoList";
import MinHeightTextarea from "../../../kit/textArea";

export default function ToDo({
  open,
  setOpen,
  inputRef,
  add,
  textareaRef,
}: ModalPropsTask) {
  return (
    <BasicModal
      title="Add a new to-do:"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ width: "400px" }}
    >
      <Box component="form" noValidate autoComplete="off" marginTop="40px">
        <TextField
          sx={{ width: "100%", marginBottom: "20px" }}
          id="Task"
          label="Task"
          variant="outlined"
          inputRef={inputRef}
        />

        <MinHeightTextarea ref={textareaRef} />
        <Button
          variant="contained"
          sx={{
            boxShadow: "none",
            width: "140px",
            borderRadius: "6px",
            height: "40px",
            marginTop: "16px",
          }}
          onClick={add}
        >
          Add
        </Button>
      </Box>
    </BasicModal>
  );
}
