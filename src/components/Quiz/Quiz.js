import React, { Component } from 'react';
import QuizList from './QuizList';
import QuizScreen from './QuizScreen';



export default class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz: false,
            quizList: [
                { name: "React.JS", questions: 50 },
                { name: "React-Native", questions: 60 },
                { name: "Node.js", questions: 40 },
                { name: "Angular", questions: 50 },
                { name: "MongoDb", questions: 45 }
            ],
            activeQuiz: null
        }
        this.startQuiz = this.startQuiz.bind(this);
        this.resetQuiz = this.resetQuiz.bind(this);
    }
    startQuiz(index) {
        this.setState({
            activeQuiz: this.state.quizList[index],
            quiz: true
        })

    }
    resetQuiz() {
        this.setState({
            activeQuiz: null,
            quiz: false
        })
    }



    render() {
        const { quiz, quizList, activeQuiz } = this.state;
        return (
            <div style={{ margin: 20 }}>
                {quiz ? <QuizScreen quiz={activeQuiz} onPress={this.resetQuiz} /> : <QuizList list={quizList} onPress={this.startQuiz} />}
            </div>
        )
    }
}