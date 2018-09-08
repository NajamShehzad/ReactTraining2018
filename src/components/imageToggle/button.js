import React from 'react';





const Button = (props) =>{
    const {changeImage} = props;
    return(
        <button style={{width:100,height:50,margin:20}} onClick={changeImage}>
            {props.text}
        </button>
    )
}

export default Button;