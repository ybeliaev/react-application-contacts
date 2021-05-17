import { makeStyles, createStyles } from "@material-ui/core/styles";
import { DATA_VIEW_MODE } from "../../constants/constants";
import { useContacts } from "./hooks/useContacts";
import { useDataViewMode } from "./hooks/useDataViewMode";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { ContactsTable } from "./ContactsTable";
import { ToggleDataViewMode } from "./ToggleDataViewMode";

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

export function Contacts() {
  // STATES
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();
  // CSS
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4" component="h1">
              Contacts:
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) return <CircularProgress />;
            if (contacts.isError) return <div>Error!</div>;
            if (dataViewMode === DATA_VIEW_MODE.TABLE)
              return <ContactsTable data={contacts.data} />;
            if (dataViewMode === DATA_VIEW_MODE.GRID) return <div>"GRID"</div>;
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
}
