import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import { ThisScope } from './ThisDetail';
import { detail, heading } from './files/detail';
import TodoList from './components/todo/todo';
import ClassWork from './components/classPractice/classWork'
import AdminEmploye from './components/adminLogin/AdminEmploye';
import Bulb from './components/blub/bulb';
import Image from './components/imageToggle/image';
import Quiz from './components/Quiz/Quiz';
import registerServiceWorker from './registerServiceWorker';


class FinalApp extends React.Component {
    render() {
        return (
            <div>
                <App />
                {/* <TodoList>TodoList</TodoList> */}
                {/* <AdminEmploye/> */}
                {/* <ClassWork /> */}
                {/* <Bulb /> */}
                {/* <Image/> */}
                <Quiz />
            </div>
        )
    }
}
// if (module.hot) {
//     module.hot.accept()
// }
ReactDOM.render(<FinalApp />, document.getElementById('root'));
registerServiceWorker();
