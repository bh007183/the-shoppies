import React,{ useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./style.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    background: "black",
    marginBottom: "2px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    padding: "2px",
  },
  cover: {
    height: 100,
  },
  controls: {
    display: "flex",
    justifyContent: "center",
  },
  alignText: {
    textAlign: "center",
  },
}));

export default function Cards(props) {
  let myFakeRef = useRef()
  const classes = useStyles();

  return (
    <Card ref={props.index === 0 ? props.scroll : myFakeRef} className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={9}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.alignText} component="h6">
                {props.title}
              </Typography>
              <Typography className={classes.alignText}>
                {props.year}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <button
                onClick={props.onVote}
                data={props.data}
                size="small"
                color="primary"
                variant="contained"
              >
                Remove
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <img
            className={classes.cover}
            src={props.poster}
            alt={props.title + " album cover"}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
