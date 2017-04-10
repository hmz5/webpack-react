import React from "react"

const Message = React.createClass({
	componentWillMount() {
		console.log("Message",this.props)
	},
	render() {
		return <h3>Message</h3>
	}
})

export default Message