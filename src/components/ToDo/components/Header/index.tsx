import { Box, Button, Grid2 } from "@mui/material";
import ModalAddTask from "../ModalAddTask";
import { ModalPropsTask } from "../../toDoList";

export default function ToDo({
  setOpen,
  open,
  inputRef,
  add,
  textareaRef,
}: ModalPropsTask) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        marginTop: "40px",
        justifyContent: "space-between",
      }}
    >
      {open && (
        <ModalAddTask
          add={add}
          inputRef={inputRef}
          setOpen={setOpen}
          open={open}
          textareaRef={textareaRef}
        />
      )}
      <Button
        variant="contained"
        sx={{
          borderRadius: "15px",
          width: "450px",
          height: "48px",
          background: "white",
          color: "black",
          boxShadow: "none",
        }}
        onClick={() => setOpen(true)}
      >
        Add a new to-do
      </Button>
      <Grid2 container spacing={2}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "15px",
            width: "180px",
            height: "48px",
            background: "primary",

            boxShadow: "none",
          }}
        >
          All
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "15px",
            width: "180px",
            height: "48px",
            background: "white",
            color: "black",
            boxShadow: "none",
          }}
        >
          To-do
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "15px",
            width: "180px",
            height: "48px",
            background: "white",
            color: "black",
            boxShadow: "none",
          }}
        >
          Completed
        </Button>
      </Grid2>
    </Box>
  );
}
