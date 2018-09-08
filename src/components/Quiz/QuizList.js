import React from 'react';




const QuizList = (props) => {
    const { list ,onPress} = props;
    return (
        <ol>
            {list.map((item,index) => (<li key={item.name}>
                {item.name}
                <button  onClick={() => onPress(index)} style={{marginLeft:10}}>
                    Start Quiz
                </button>
            </li>))}
        </ol>
    )
}


export default QuizList;


