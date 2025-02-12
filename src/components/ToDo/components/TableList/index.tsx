import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ToDoList } from "../../toDoList";
const rows = [
  {
    label: "Task",
    value: "Task",
  },
  {
    label: "Description",
    value: "Description",
  },
];
export default function ToDo(toDoList: ToDoList[]) {
  return (
    <Table
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
        background: "white",
        overflowY: "scroll",
        borderRadius: "15px",
        height: "200px",
      }}
    >
      <TableHead>
        <TableRow>
          {rows.map((item, index) => (
            <TableCell sx={{ borderBottom: "none" }} key={index}>
              {item.value}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {toDoList?.map((item: ToDoList, index: number) => (
          <TableRow>
            <TableCell sx={{ borderBottom: "none" }} key={index}>
              {item.task}
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }} key={index}>
              {item.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
