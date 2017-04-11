import * as types from '../mutation-types'

// 添加todo
export const addTodo = function(text) {
	return {
		type: types.ADD_TODO,
		text
	}
}

// changeTodo
export const changeTodo = function(index) {
	return {
		type: types.CHANGE_TODO,
		index
	}
}