import React, {Component} from 'react';
import Header from '../../components/header';
import AddTodo from '../../components/addTodo';
import TodoList from '../../components/todoList';
import './reduxDemo.scss';

class ReduxDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'ReduxDemo'
		};
	}
	render() {
		console.log(this.props);
		return(
			<div className="view m-reduxDemo f-flex f-flexc">
				<Header title={this.state.title} />
				<div className="f-ot content f-flex1">
					<AddTodo />
					<TodoList />
				</div>
			</div>
		)
	}
}

export default ReduxDemo