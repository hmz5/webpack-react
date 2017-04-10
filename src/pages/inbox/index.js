import React from "react";
import { Link } from 'react-router'

const Inbox = React.createClass({
	render() {
		return (
			<div>
				<h2>Inbox</h2>
				<ul>
					<li><Link to="/message/1">message1</Link></li>
				</ul>
				{this.props.children || "Welcome to your Inbox"}

			</div>
		)
	}
})

export default Inbox;