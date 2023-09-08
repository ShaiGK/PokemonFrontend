// eslint-disable-next-line
import classes from "./Display.module.css";
import React from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Display = (props) => {
  return (
    <Card className={classes.display}>
      <div className={classes.title}>You did {props.damage} damage!</div>
      <Button
        type="submit"
        onClick={props.onResetClick}
        className={classes.button}
      >
        Simulate Another
      </Button>
    </Card>
  );
};

export default Display;
