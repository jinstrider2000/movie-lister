import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import App from './components/App';
import { Provider } from "react-redux";
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
