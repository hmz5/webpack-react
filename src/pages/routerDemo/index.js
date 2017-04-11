import React, { Component } from 'react';
import Header from '../../components/header';
import './router.scss';

class RouterDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {

	}
	render() {
		return(
			<div className="view m-routerDemo f-flex f-flexc">
				<Header title="RouterDemo" />
				<div className="f-ot content">
					<ul>
						<li>
							query{JSON.stringify(this.props.location.query)}
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default RouterDemo