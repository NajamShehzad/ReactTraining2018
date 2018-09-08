import React, { Component } from 'react';
import image from './myImage.jpg';
import Button from './button';




export default class Image extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    toggleImage(bool) {
        this.setState({ show: bool })
    }



    render() {
        const { show } = this.state;
        return (
            <div style={{margin:20}}>
                <Button text="Off Image" changeImage={() => this.toggleImage(true)} />
                <Button text="On Image" changeImage={() => this.toggleImage(false)} />
                <br />
                {show && <img src={image} style={{ width: 500, height: 500 }} />}
            </div>
        )
    }
}