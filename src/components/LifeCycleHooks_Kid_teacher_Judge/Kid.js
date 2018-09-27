import React, { Component } from 'react'


class Kid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous', danceSteps: [], currentStepIndex: 0,
            startedPerforming: false
        };
    }

    componentDidMount(){
        this.setState({danceSteps:['step1','step2','step3'],startedPerforming:true})
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({danceSteps:nextProps.furtherSteps,currentStepIndex:0});
        if(nextProps.applaud == true){
            this.setState({emotion:"Happy"})
        }
        
    }

    qualified() {
        this.setState({ startedPerforming: false })
    }
    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming } = this.state;
        let { currentStepIndex } = this.state;
        return (
            <div>
                <div>dressColor: {dressColor})</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion})</div>
                {
                    startedPerforming &&
                    <div>
                        Current Step: {danceSteps[currentStepIndex]}
                        <button onClick={() => this.setState({ currentStepIndex: ++currentStepIndex })}>Perform Next Step</button>
                    </div>
                }
            </div>

        );
    }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

export default Kid;