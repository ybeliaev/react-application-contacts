import React from "react";

import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Contacts } from "..";

//   return <div>{data[0].name.first}</div>;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function ContactsTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Birsday</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell component="th" scope="row">
                {
                  <div className={classes.root}>
                    <Avatar alt="" src={contact.picture.thumbnail} />
                  </div>
                }
              </TableCell>
              <TableCell align="left">
                {contact.name.title} {contact.name.first} {contact.name.last}
              </TableCell>
              <TableCell align="left">
                <Typography>
                  {format(new Date(contact.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{contact.dob.age}&nbsp;year</Typography>
              </TableCell>
              <TableCell align="left">{contact.email}</TableCell>
              <TableCell align="left">{contact.cell}</TableCell>
              <TableCell align="left">{contact.location.city}</TableCell>
              <TableCell align="right">{contact.nat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
