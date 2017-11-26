module.exports = {
    path: 'aboutUs',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./aboutUs')));
    }
};