import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { NATIONALITIES } from "../../constants/constants";

const useStyles = makeStyles((theme) =>
  createStyles({
    fieldsContainer: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
    fieldGender: {
      minWidth: 100,
    },
    fieldNationality: {
      minWidth: 140,
    },
  })
);

export default function ContactsFilters({
  filters,
  updateFilter,
  clearFilters,
}) {
  const classes = useStyles();

  // handlers
  const handleChangeFilter = (e) => {
    updateFilter(e.target.name, e.target.value);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" className={classes.fieldsContainer}>
        <TextField
          value={filters.fullname}
          name="fullname"
          label="Fullname"
          variant="outlined"
          onChange={handleChangeFilter}
          size="small"
        />
        <FormControl
          variant="outlined"
          className={classes.fieldGender}
          size="small"
        >
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
        <FormControl
          variant="outlined"
          className={classes.fieldNationality}
          size="small"
        >
          <InputLabel id="nationality">Nationality</InputLabel>
          <Select
            name="nationality"
            labelId="gender"
            value={filters.nationality}
            onChange={handleChangeFilter}
            label="Nationality"
          >
            <MenuItem value="all">All</MenuItem>
            {Object.entries(NATIONALITIES).map(([key, name]) => (
              <MenuItem value={key} key={key}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="outlined"
        startIcon={<ClearIcon />}
        size="small"
        onClick={clearFilters}
      >
        Clear
      </Button>
    </Box>
  );
}

ContactsFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};
