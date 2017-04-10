let initialState = [];

const todo = function(state, action) {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				text: action.text,
				completed: false
			}
		default: 
			return state
	}
}

const todos = function(state = initialState, action) {
	switch(action.type) {
		case 'ADD_TODO':
			console.log([...state, todo(undefined, action)]);
			return [...state, todo(undefined, action)]
		default: 
			return state
	}
}

export default todos
