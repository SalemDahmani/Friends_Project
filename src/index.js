import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

ReactDOM.render(<App Friend/>, document.getElementById('root')
);


serviceWorker.unregister();
