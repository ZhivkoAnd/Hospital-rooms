import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoadingSpinners from "./ui/LoadingSpinners";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Link } from "react-router-dom";

const StyledTableCell: any = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface AdminProductList {
  data: any;
  remove: (id: number) => void;
  isLoadingDeletedElement: boolean;
}

const AdminProductList = ({ data }: any) => {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Patient ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Last changed on</StyledTableCell>
            <StyledTableCell align="center">Update Info</StyledTableCell>
            <StyledTableCell align="center">Delete Patient</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((patient: any) => (
            <StyledTableRow key={patient.id}>
              <StyledTableCell align="center">{patient.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {patient.name}
              </StyledTableCell>
              <StyledTableCell align="center">{patient.date}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<UpgradeIcon />}
                  component={Link}
                  to={`/update-product/${patient.id}`}
                >
                  Update
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminProductList;
