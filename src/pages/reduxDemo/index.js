import React, {Component} from 'react';
import Header from '../../components/header';
import './reduxDemo.scss';

class ReduxDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'ReduxDemo'
		};
	}
	render() {
		return(
			<div className="view m-reduxDemo f-flex f-flexc">
				<Header title={this.state.title} />
				<div className="f-ot content f-flex1">

				</div>
			</div>
		)
	}
}

export default ReduxDemo