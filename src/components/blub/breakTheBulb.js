import React from 'react';

export default function BreakTheBulb(props) {
    return (
        <div>
            <button className="btn btn-default" style={{margin:10}} onClick={props.break}>Break The Bulb</button>
        </div>
    )
}