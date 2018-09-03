import React,{Component}  from 'react';
import lightBulb from './lightBulb.webp'

export default function LightBulb (props){
    return(
        <div>
            <img src={lightBulb} width="450" height="500" />
            <div>
            <button onClick={props.change}>Off The Bulb</button>
            </div>
        </div>
    )
}