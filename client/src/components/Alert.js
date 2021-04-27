import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert id="Alert" severity="success">
        <AlertTitle>Success</AlertTitle>
        You have voted for 5 films! — <strong>Way to go!</strong>
      </Alert>
    </div>
  );
}
