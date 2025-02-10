import { Box, Typography } from "@mui/material";

export default function ToDo() {
  return (
    <Box
      sx={{
        width: "1200px",
        height: "400px",
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
    </Box>
  );
}
