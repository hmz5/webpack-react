import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTodo } from "../../redux/actions";
import './todo.scss';
class Todo extends Component {
	constructor(props) {
		super(props);
	}
	changeComplite() {
		const {dispatch} = this.props;
		dispatch(changeTodo(this.props.index));
	}
    render() {
    	console.log(this.props);
		return (
			<li className="todoItem" onClick={this.changeComplite.bind(this)} style={{ textDecoration : this.props.todoItem.completed ? 'line-through' : ''}}>
				{this.props.todoItem.text}
			</li>
		)
	}
}

// Prop 验证
Todo.propTypes = {
	todoItem: React.PropTypes.object.isRequired,
	index: React.PropTypes.number.isRequired
}

Todo = connect()(Todo);

export default Todo;