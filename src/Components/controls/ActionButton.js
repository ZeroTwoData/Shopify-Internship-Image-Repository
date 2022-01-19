import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5),
        maxWidth: 50
    },
    secondary: {
        backgroundColor: theme.palette.error.dark,
        '& .MuiButton-label': {
            color: theme.palette.error.light,
        }
    },
    primary: {
        backgroundColor: theme.palette.info.dark,
        '& .MuiButton-label': {
            color: theme.palette.info.light,
        }
    },
}))


export default function ActionButton(props) {

    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
