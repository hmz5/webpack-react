import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
	render() {
		// console.log(this.props)
		return(
			<div style={{ height: '100%' }}>
				{this.props.children}
			</div>	
		)
	}
}

export default App