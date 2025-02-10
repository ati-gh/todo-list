import { Box, Typography } from "@mui/material";
import TableList from "./components/TableList";
import Header from "./components/Header";
import { useState } from "react";

export default function ToDo() {
  const [open, setOpen] = useState(false);
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
      <Header setOpen={setOpen} open={open} />
      <TableList />
    </Box>
  );
}
