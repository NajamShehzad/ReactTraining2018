import React, { Component } from 'react';

export class  ThisScope  extends  Component {
    render() {
        return(
            <div>
                <h1 style={{margin:5}} >{this.props.heading}</h1>
                <p style={{margin:10}}>{this.props.detail}</p>
            </div>
        )
    }
};

