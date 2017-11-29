import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/app/App';
import registerServiceWorker from './container/app/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
