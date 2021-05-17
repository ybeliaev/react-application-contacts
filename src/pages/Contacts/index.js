import { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { ContactsTable } from "./ContactsTable";
import { useContacts } from "./hooks/useContacts";

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

export function Contacts() {
  // STATES
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(DATA_VIEW_MODE.TABLE);
  // CSS
  const classes = useStyles();

  const handleChangeViewMode = (event, nextView) => {
    setDataViewMode(nextView);
  };
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts:
            </Typography>
            <ToggleButtonGroup
              orientation="vertical"
              value={dataViewMode}
              exclusive
              onChange={handleChangeViewMode}
            >
              <ToggleButton
                value={DATA_VIEW_MODE.GRID}
                aria-label={DATA_VIEW_MODE.GRID}
              >
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton
                value={DATA_VIEW_MODE.TABLE}
                aria-label={DATA_VIEW_MODE.TABLE}
              >
                <ViewModuleIcon />
              </ToggleButton>
            </ToggleButtonGroup>
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
