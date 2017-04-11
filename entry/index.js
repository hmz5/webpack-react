import 'common.scss';
import 'flex.scss';
import 'ui.scss';
import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routeConfig from "../src/router/IndexRouter.js"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import IndexStore from '../src/redux';

const store = createStore(IndexStore);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routeConfig} />
	</Provider>
, document.getElementById("app"))