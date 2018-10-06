import React from 'react';
import pp from './pp.jpg';



const Info = (props) => {
    return (
        <div>
            <div style={{ float: "left" }}>
                <img src={pp} style={{ width: 70, height: 70, borderRadius: 50 }} />
            </div>
            <div style={{ float: "left", color: 'blue' }}>
                <strong>
                    Najam Shehzad
                </strong>
                <br />
                <span style={{ color: 'grey' }}>
                    Sponsored
                </span>
            </div>
        </div>
    )
}


export default Info 