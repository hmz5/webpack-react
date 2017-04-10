module.exports = {
	path: 'about',
	getComponent(nextState, callback) {
		require.ensure([], (require) => {
		    const about = require('../../pages/about');
		    callback(null, about.default)
		}, 'about')
	}
}