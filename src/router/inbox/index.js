module.exports = {
	path: 'inbox',
	getComponent(nextState, callback) {
		require.ensure([], (require) => {
		    const inbox = require('../../pages/inbox');
		    callback(null, inbox.default)
		}, 'inbox')
	},
	childRoutes: [
		require("./message")
	],
	indexRoute: {
		getComponent(nextState, callback) {
			require.ensure([], (require) => {
			    const message = require('../../pages/message');
			    callback(null, message.default)
			}, 'message')
		},
	}
}