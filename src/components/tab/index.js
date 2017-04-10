import React, {Component} from 'react';
import { Link } from 'react-router';
import './tab.scss'
class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "f-flex1 tabItem",
			activeName: "f-flex1 tabItem active"
		}
	}
	render() {
		return(
			<div className="munu-tabs f-flex">
		        <Link to={{ pathname: '/' }} className={this.props.whichTab == 1 ? this.state.activeName : this.state.name}>
		            <div className="tabIcon homeIcon"></div>
		            <p>
		                Home
		            </p>
		        </Link>
		        <Link to={{ pathname: '/menu' }} className={this.props.whichTab == 2 ? this.state.activeName : this.state.name}>
		            <div className="tabIcon demoIcon"></div>
		            <p>
		                Demo
		            </p>
		        </Link>
		    </div>
		)
	}
}

Tab.propTypes = {
	whichTab: React.PropTypes.string
}

export default Tab