import React, { Component } from 'react';
import bulb from './bulbSimple.jpg';
import LightBulb from './lightBulb'
import BrokenBulb from './brokenBulb';
import BreakTheBulb from './breakTheBulb'


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
        const { bulbOn, breakBulb } = this.state;
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    {breakBulb ? <BrokenBulb /> :
                        <div>
                            {!bulbOn ?
                                <div>
                                    <img src={bulb} width="450" height="500" />
                                    <div>
                                        <button onClick={this.change}>On The Bulb</button>
                                    </div>
                                </div> : <div> <LightBulb change={this.change} /><BreakTheBulb break={this.break}/></div>
                            }
                        </div>

                    }

                </div>
            </div>
        )
    }




}
export default Bulb;