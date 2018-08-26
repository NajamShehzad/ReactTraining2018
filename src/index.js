import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThisScope } from './ThisDetail';
import { detail, heading } from './files/detail';
import TodoList from './components/todo/todo';
import registerServiceWorker from './registerServiceWorker';

class FinalApp extends React.Component {
    render() {
        return (
            <div>
                <App />
                <TodoList/>
            </div>
        )
    }
}
// if (module.hot) {
//     module.hot.accept()
// }
ReactDOM.render(<FinalApp />, document.getElementById('root'));
registerServiceWorker();
