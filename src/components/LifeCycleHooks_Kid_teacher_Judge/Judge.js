import React, { Component } from 'react';


class Judge extends Component {
    constructor() {
        super();
        this.state = { stars: 0, available: false }
        this.provideStars = this.provideStars.bind(this);
        this.applaud = this.applaud.bind(this);
    }
    applaud() {
        this.props.sendApplaud(true)
    }
    provideStars() {
        let { stars } = this.state;
        stars++;
        if (stars <= 5) {
            this.setState({ stars })
        }
    }
    render() {
        const { stars, available } = this.state;
        return (
            <div>
                <button type="button" onClick={this.applaud}>Appreciate performance</button>
                <button type="button" onClick={this.provideStars}>Provide stars</button>
                Kid is available: {available}
                Stars gained: {stars}
            </div>
        );
    }
}

export default Judge;