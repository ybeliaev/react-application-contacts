import { useState } from "react";
import { useContacts } from "./hooks/useContacts";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ContactsTable } from "./ContactsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);
// CONSTANTS
const DATA_VIEW_MODE = {
  TABLE: "table",
  GRID: "grid",
};
function Loading() {
  return <div>Loading..</div>;
}

export function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(DATA_VIEW_MODE.TABLE);

  if (contacts.isError) {
    return <div>Error!</div>;
  }
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h3" component="h1">
            Contacts:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {contacts.isLoading ? (
            <Loading />
          ) : (
            <ContactsTable data={contacts.data} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
