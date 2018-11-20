// let's go!
import React from 'react';
import { render } from 'react-dom';
//import './css/style.css';
//import { BrowserRouter, Match, Miss } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return(
		<Router>
			<div>
				<Switch>
					<Route path="/" component={StorePicker} />
					<Route path="/store/:storeId" component={App} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

render(<Root/>, document.querySelector('#main'));