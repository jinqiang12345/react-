import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import app from './reducers';
import R from './router';

let store = createStore(app);

ReactDOM.render(
<Provider store={store}>
    <R />
</Provider>, document.getElementById('root'));
registerServiceWorker();
