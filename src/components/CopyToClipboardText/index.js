import React, { useState, useCallback } from "react";

// components from Material ui
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Zoom from "@material-ui/core/Zoom";

// hook from react-use
import { useCopyToClipboard } from "react-use";
// my styles
import { makeStyles, createStyles } from "@material-ui/core/styles";
// PropTypes
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
// CONSTANTS
const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};
const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "copy",
  [STATUS_COPY.COPIED]: "copied",
};

export const CopyToClipboardText = ({ text }) => {
  // states
  const [, copyToClipboard] = useCopyToClipboard(); // here state isn't use
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  // styles
  const classes = useStyles();
  // handle functions
  const handleClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);
  const handleClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Tooltip
        title={TITLE_BY_STATUS[statusCopy]}
        aria-label="copy"
        placement="top"
        arrow
        TransitionComponent={Zoom}
      >
        <Box
          display="flex"
          alignItems="center"
          className={classes.root}
          onClick={handleClickCopy}
        >
          <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
          {text}
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
};
CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
