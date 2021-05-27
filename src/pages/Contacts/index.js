import React, { useState } from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { DATA_VIEW_MODE } from "../../constants/constants";
import { useContacts } from "./hooks/useContacts";
import { useDataViewMode } from "./hooks/useDataViewMode";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    filtersContainer: {
      marginBottom: theme.spacing(3),
    },
    fieldGender: {
      minWidth: 100,
    },
  })
);

const filterDefaultValue = {
  fullname: "",
  gender: "all",
};
// clear functions
const filterByFullName = ({ first, last }, fullname) =>
  first?.toLowerCase().includes(fullname.toLowerCase()) ||
  last?.toLowerCase().includes(fullname.toLowerCase());

const filterByGender = (gender, filterGender) => {
  if (filterGender === "all") return true;
  return gender === filterGender;
};

export function Contacts() {
  // STATES
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();
  const [filters, setFilters] = useState(filterDefaultValue);
  // CSS
  const classes = useStyles();

  // handlers
  const handleChangeFilter = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // if filters.fullname="" - includes return TRUE
  const filteredContacts = contacts.data
    .filter((c) => filterByFullName(c.name, filters.fullname))
    .filter((c) => filterByGender(c.gender, filters.gender));

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
        <Grid item xs={12} className={classes.filtersContainer}>
          <Box display="flex">
            <TextField
              value={filters.fullname}
              name="fullname"
              label="Fullname"
              variant="outlined"
              size="small"
              onChange={handleChangeFilter}
            />
            <FormControl variant="outlined" className={classes.fieldGender}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                name="gender"
                labelId="gender"
                value={filters.gender}
                onChange={handleChangeFilter}
                label="Gender"
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading)
              return <CircularProgress data-testid="contacts-loader" />;
            if (contacts.isError)
              return <div data-testid="contacts-error">Error!</div>;
            if (dataViewMode === DATA_VIEW_MODE.TABLE)
              return <ContactsTable data={filteredContacts} />;
            if (dataViewMode === DATA_VIEW_MODE.GRID)
              return <div data-testid="contacts-grid-container">"GRID"</div>;
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
}
