import React, { Component } from 'react';
import bulb from './bulbSimple.jpg';
import LightBulb from './lightBulb'


class Bulb extends Component {

    constructor() {
        super();
        this.state = {
            bulbOn: false,
            breakBulb:false
        }
        this.change = this.change.bind(this);
    }
    change() {
        const { bulbOn } = this.state;
        this.setState({ bulbOn: !bulbOn });
    }
    break(){

    }

    render() {
        const { bulbOn } = this.state;
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    {!bulbOn ?
                        <div>
                            <img src={bulb} width="450" height="600" />
                            <div>
                            <button onClick={this.change}>On The Bulb</button>
                            </div>
                        </div> : <LightBulb change={this.change} />
                    }

                </div>
            </div>
        )
    }




}
export default Bulb;