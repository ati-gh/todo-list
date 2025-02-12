import { Box, Typography } from "@mui/material";
import TableList from "./components/TableList";
import Header from "./components/Header";
import { useRef, useState } from "react";
import { ToDoList } from "./toDoList";

export default function ToDo() {
  const [open, setOpen] = useState(false);
  const [toDoList, setToDoList] = useState<ToDoList[]>([]);
  const inputRef = useRef<HTMLInputElement | undefined>();
  const textareaRef = useRef<HTMLInputElement | undefined>();
  const add = () => {
    if (inputRef.current) {
      const inputText = inputRef.current?.value;
      const inputDescription = textareaRef.current?.value;
      const newToDo = {
        id: Date.now(),
        task: inputText,
        description: inputDescription,
      };
      setToDoList((prev: ToDoList[]) => [...prev, newToDo]);
      inputRef.current.value = "";
      setOpen(false);
    }
  };

  return (
    <Box
      sx={{
        width: "1200px",
        height: "auto",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "30px",
        marginX: "auto",
        marginTop: "100px",
        padding: "50px",
      }}
    >
      <Typography
        component="h1"
        color="white"
        variant="h3"
        sx={{ textAlign: "center" }}
      >
        To-Do List
      </Typography>
      <Header
        add={add}
        textareaRef={textareaRef}
        inputRef={inputRef}
        setOpen={setOpen}
        open={open}
      />

      <TableList toDoList={toDoList} />
    </Box>
  );
}
