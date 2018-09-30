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
            kidStars: 0,
            kidApplaud: false,
            kidApper: true,
            judge: true
        }
        this.sendSteps = this.sendSteps.bind(this);
        this.sendStars = this.sendStars.bind(this);
        this.sendApplaud = this.sendApplaud.bind(this);
        this.exitKid = this.exitKid.bind(this);
        this.exitJudge = this.exitJudge.bind(this);
    }

    componentWillMount() {
        this.setState({ volume: 5 })
    }

    sendSteps(kidSteps) {

        this.setState({ kidSteps })

    }
    sendStars(kidStars) {
        this.setState({ kidStars })
    }
    sendApplaud(kidApplaud) {
        this.setState({ kidApplaud })
    }
    exitKid(bool) {
        this.setState({ kidApper: bool });
    }
    exitJudge(bool) {
        this.setState({ judge: bool })
    }

    render() {
        const { kidApper, judge, kidSteps, kidApplaud } = this.state;
        return (
            <div style={{ margin: "50px" }}>
                {kidApper && <Teacher sendSteps={this.sendSteps} />}
                {kidApper && <Kid exitJudge={this.exitJudge} dressColor="yellow" applaud={kidApplaud} furtherSteps={kidSteps} />}
                {judge && <Judge sendApplaud={this.sendApplaud} exitKid={this.exitKid} sendStars={this.sendStars} />}
            </div>
        )
    }
}

export default LifeCycle;