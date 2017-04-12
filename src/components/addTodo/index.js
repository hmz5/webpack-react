import React, {Component} from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import './addTodo.scss';

class AddTodo extends Component {
    add() {
    	const {dispatch} = this.props;
    	console.log(this.refs.theInput.value);
    	if(this.refs.theInput.value == "") {
    		return;
    	}
    	dispatch(addTodo(this.refs.theInput.value));
    	this.refs.theInput.value = "";
    }
	render() {
		return(
			<div className="addTodo f-flex">
				<input ref="theInput" type="text" name="" className="f-flex1" />
				<button onClick={this.add.bind(this)} className="addBtn">添加</button>
			</div>
		)
	}
}
AddTodo = connect()(AddTodo);
export default AddTodo