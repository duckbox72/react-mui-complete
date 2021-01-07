import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from  "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    buttonText: props => {
        return {
            color: props.cool ? 'blue' : "red",
        };
    },
    buttonBackground: {

        backgroundColor: "red"
    }
}));

export default function Hook(props) {
    const classes = useStyles(props);
    return (
        <Button fullWidth className={classNames(classes.buttonText, classes.buttonBackground)}>the button</Button>
    );
}