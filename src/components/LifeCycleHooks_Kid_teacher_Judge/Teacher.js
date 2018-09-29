import React,{Component} from 'react';

class Teacher extends Component {
    constructor(){
        super()
        this.sendDataToKid = this.sendDataToKid.bind(this);
    }
    
    sendDataToKid() {
        const furtherSteps = [ 'step4', 'step5','step6','step7','step8','step9','step10','step11']
        this.props.sendSteps(furtherSteps);
    }
    render() {
        return (
            <button onClick={this.sendDataToKid}>Get Help From Teacher</button>
        );
    }
}

export default Teacher;