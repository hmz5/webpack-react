import * as types from '../mutation-types'

export const addTodo = function(text) {
	return {
		type: types.ADD_TODO,
		text
	}
}