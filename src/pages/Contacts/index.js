import React, { useState, useEffect } from "react";

import { useContacts } from "./useContacts";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  })
);

export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();
  if (contacts.isLoading) {
    return <div>Loading..</div>;
  }
  if (contacts.isError) {
    return <div>Error!</div>;
  }
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>Contacts: {contacts.data[0].name.first}</div>
        </Grid>
      </Grid>
    </Container>
  );
}
