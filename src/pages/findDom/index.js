import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Header from '../../components/header';
import './findDom.scss';

class FindDom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		}
	}
	componentDidMount() {
	  	const el = findDOMNode(this);
	  	console.dir(el)
	}
	handleChange(e) {
		this.setState({ userInput: e.target.value });
		console.log(e.target.value)
	}
	clearAndFocusInput() {
		console.dir(this.refs.theInput);
		this.setState({ userInput: '' }, () => {
			this.refs.theInput.focus();
		});
	}
	render() {
		return(
			<div className="view m-findDom f-flex f-flexc">
				<Header title="FindDom" />
				<div className="f-ot content">
					<div onClick={this.clearAndFocusInput.bind(this)}>
						Click to Focus and Reset
					</div>
					<input ref="theInput" value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default FindDom