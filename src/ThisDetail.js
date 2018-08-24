import React from 'react';

export function ThisScope(props) {
    return (
        <div key={props.id}>
            <h1 style={{ margin: 5 }} >{props.heading}</h1>
            <p style={{ margin: 10 }}>{props.detail}</p>
        </div>
    )

};

