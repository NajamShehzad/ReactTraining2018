import React  from 'react';
import brokenBulb from './brokenBulb.jpg';

export default function BrokenBulb (props){
    return(
        <div>
            <img alt="BrokenBulb" src={brokenBulb} width="450" height="500" className="btn btn-default" />
        </div>
    )
}