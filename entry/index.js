import 'common.scss';
import 'flex.scss';
import 'ui.scss';
import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routeConfig from "../src/router/IndexRouter.js"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '../src/redux';

const store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routeConfig} />
	</Provider>
, document.getElementById("app"))