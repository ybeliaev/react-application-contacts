import React from "react";

// components from Material ui
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";

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

export const CopyToClipboardText = ({ text }) => {
  // states
  const [state, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("copy");
  // styles
  const classes = useStyles();

  return (
    <Tooltip title="Copy" aria-label="copy" placement="top" arrow>
      <Box
        display="flex"
        alignItems="center"
        className={classes.root}
        onClick={() => copyToClipboard(text)}
      >
        <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
        {text}
      </Box>
    </Tooltip>
  );
};
CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
