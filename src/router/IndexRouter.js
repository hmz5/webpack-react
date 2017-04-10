const routeConfig = [{
    path: '/',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            const app = require('../pages/app');
            callback(null, app.default)
        }, 'app')
    },
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], (require) => {
                const dashboard = require('../components/homeCom');
                callback(null, dashboard.default)
            }, 'homeCom')
        },
    }
    // childRoutes: [
    //     require("./about"),
    //     require("./inbox")
    // ]
}, {
    path: 'menu',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            const app = require('../pages/menu');
            callback(null, app.default)
        }, 'menu')
    }
}, {
    path: 'reduxDemo',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            const app = require('../pages/reduxDemo');
            callback(null, app.default)
        }, 'reduxDemo')
    }
}, {
    path: '*',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            const app = require('../pages/app');
            callback(null, app.default)
        }, 'app')
    },
    onEnter: function (nextState, replaceState) {
    	// console.log(nextState, replaceState)
		replaceState('/');
	}
}]

export default routeConfig;
