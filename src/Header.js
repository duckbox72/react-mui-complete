import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStiles: {
        flex: 1,
    }

}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStiles}>
                    duckdev.org
                </Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;