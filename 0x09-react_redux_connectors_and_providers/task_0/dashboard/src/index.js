import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(uiReducer);
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
