import React, { Component } from 'react';
import Kid from './Kid';
import Teacher from './Teacher';
import Judge from './Judge';




class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            volume: 0,
            kidSteps: [],
            kidStars:0,
            kidApplaud:false
        }
        this.sendSteps = this.sendSteps.bind(this);
        this.sendStars = this.sendStars.bind(this);
        this.sendApplaud = this.sendApplaud.bind(this);
    }

    componentWillMount() {
        this.setState({ volume: 5 })
    }

    sendSteps(kidSteps) {
        
        this.setState({ kidSteps })

    }
    sendStars(kidStars){
        this.setState({kidStars})
    }
    sendApplaud(kidApplaud){
       this.setState({kidApplaud})
    }

    render() {
        const { kidSteps,kidApplaud } = this.state;
        return (
            <div style={{ margin: "50px" }}>
                <Teacher sendSteps={this.sendSteps} />
                <Kid dressColor="yellow" applaud={kidApplaud} furtherSteps={kidSteps} />
                <Judge  sendApplaud={this.sendApplaud} sendStars={this.sendStars}/>
            </div>
        )
    }
}

export default LifeCycle;