import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    fieldGender: {
      minWidth: 100,
    },
  })
);

export default function ContactsFilters({ filters, handleChangeFilter }) {
  const classes = useStyles();
  return (
    <Box display="flex">
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
    </Box>
  );
}
