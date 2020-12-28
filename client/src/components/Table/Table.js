import React, { useState } from "react";
import { fetchData } from "../../helper/FetchData";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { deleteData } from "../../helper/DeleteData";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const Show = () => {
    fetchData("https://user-form-mern.herokuapp.com/api/user").then((data) => {
      setRows(data);
    });
  };

  const userDelete = (id) => {
    deleteData(`/api/user/deleteUser/${id}`)
      .then((data) => {
        console.log("Success:", data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };

  return (
    <div>
      <Button onClick={Show} variant="contained" color="primary">
        SHOW MEMBERS
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Firstname </TableCell>
              <TableCell align="center">LastName</TableCell>
              <TableCell align="center">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={rows.phone}>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => userDelete(row._id)}
                >
                  DELETE
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
