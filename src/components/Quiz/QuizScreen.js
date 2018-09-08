import React from 'react';




const QuizScreen = (props) => {
    const { quiz, onPress } = props;
    return (
        <div>
            {quiz.name}<br />
            Total Questions : {quiz.questions}
            <button onClick={onPress}>Reset</button>
        </div>
    )
}


export default QuizScreen;


