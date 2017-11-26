module.exports = {
    path: 'misc',
    childRoutes: [{
        path: 'page_not_found',
        getComponent: (location, cb) => {
            return require.ensure([], (require) => cb(null, require('./Page404')));
        }
    }, {
        path: 'error',
        getComponent: (location, cb) => {
            return require.ensure([], (require) => cb(null, require('./Page500')));
        }
    }]
};