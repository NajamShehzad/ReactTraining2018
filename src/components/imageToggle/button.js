import React from 'react';


const Button = (props) =>{
    const {onPress} = props;
    return(
        <button style={{width:150,height:50,margin:20}} onClick={onPress}>
            {props.text}
        </button>
    )
}

export default Button;