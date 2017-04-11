import React, { Component } from 'react';
import { connect } from "react-redux";
import Todo from '../todo';
import './todoList.scss';

class TodoList extends Component {
	render() {
		console.log(this.props)
		return (
			<ul className="todolist">
			{this.props.todos.map((todo, index) =>
				<Todo key={index} todoItem={todo} index={index} />
			)}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

TodoList = connect(mapStateToProps)(TodoList);
export default TodoList