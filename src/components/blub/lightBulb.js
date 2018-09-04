import React from 'react';
import lightBulb from './lightBulb.webp';
import PropsTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
function LightBulb(props) {
    const { classes } = props;
    return (
        <div>
            <img alt="LightBulb" src={lightBulb} width="450" height="500" />
            <div>
                <Button onClick={props.change} color="deafult" variant="outlined" className={classes.button}>
                    Off The Bulb
                </Button>
            </div>
        </div>
    )
}
export default withStyles(styles)(LightBulb);