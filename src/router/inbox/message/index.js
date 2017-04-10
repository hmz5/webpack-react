module.exports = {
	path: '/message',
	getComponent(nextState, callback) {
		require.ensure([], (require) => {
		    const message = require('../../../pages/message');
		    callback(null, message.default)
		}, 'message')
	}
}