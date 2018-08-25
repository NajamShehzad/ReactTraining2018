import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThisScope } from './ThisDetail';
import { detail, heading } from './files/detail';
import registerServiceWorker from './registerServiceWorker';

class FinalApp extends React.Component {
    render() {
        return (
            <div>
                <App />
                {/* {heading.map((data, index) => {
                    return (
                        <ThisScope key={index+3} heading={data} id={index + 1} detail={detail[index]} />
                    )
                }
                )} */}
            </div>
        )
    }
}
// if (module.hot) {
//     module.hot.accept()
// }
ReactDOM.render(<FinalApp />, document.getElementById('root'));
registerServiceWorker();
