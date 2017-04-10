import React, {Component} from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {
    add(e) {
    	const {dispatch} = this.props;
    	console.log(this.refs.theInput.value)
    	dispatch(addTodo(this.refs.theInput.value));
    }
	render() {
		return(
			<div>
				<input ref="theInput" type="text" name="" />
				<button onClick={this.add.bind(this)}>添加</button>
			</div>
		)
	}
}
AddTodo = connect()(AddTodo);
export default AddTodo