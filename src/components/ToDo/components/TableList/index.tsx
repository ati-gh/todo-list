import { Table, TableCell, TableHead, TableRow } from "@mui/material";
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
export default function ToDo() {
  return (
    <Table
      sx={{
        width: "100%",
        display: "flex",
        marginTop: "40px",
        background: "white",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "200px",
        borderCollapse: "collapse",
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
    </Table>
  );
}
