import React, { Component } from 'react';
import bulb from './bulbSimple.jpg';
import LightBulb from './lightBulb'
import BrokenBulb from './brokenBulb';
import BreakTheBulb from './breakTheBulb';
import PropTypes from 'prop-types';
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

class Bulb extends Component {

    constructor() {
        super();
        this.state = {
            bulbOn: false,
            breakBulb: false
        }
        this.change = this.change.bind(this);
        this.break = this.break.bind(this);
    }
    change() {
        const { bulbOn } = this.state;
        this.setState({ bulbOn: !bulbOn });
    }
    break() {
        const { breakBulb } = this.state;
        this.setState({ breakBulb: !breakBulb });
    }

    render() {
        const { classes } = this.props;
        const { bulbOn, breakBulb } = this.state;
        return (
            <div>
                <div>

                </div>
                <div style={{ textAlign: "center" }}>
                    {breakBulb ? <BrokenBulb /> :
                        <div>
                            {!bulbOn ?
                                <div>
                                    <img alt="SimpleOffBulb" src={bulb} width="450" height="500" />
                                    <div>
                                        <Button onClick={this.change} variant="outlined" className={classes.button}>
                                            Light The Bulb
                                        </Button>
                                    </div>
                                </div> : <div> <LightBulb change={this.change} /><BreakTheBulb break={this.break} /></div>
                            }
                        </div>

                    }

                </div>
            </div>
        )
    }

}
Bulb.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Bulb);