import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	goBack() {
		console.log(this.props);
		const { router } = this.context;
		router.goBack(); // router.go(-1)
	}
	render() {
		return(
			<div className="f-pr m-header">
		        {!this.props.noBackBtn ? <div className="u-herder-btn u-back" onClick={this.goBack.bind(this)}></div> : ''}
		        <div className="u-header-title f-toe">{this.props.title}</div>
		    </div>
		)
	}
}

Header.contextTypes = {
  	router: React.PropTypes.object.isRequired
};

export default Header