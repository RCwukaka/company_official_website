module.exports = {
    path: 'socialSecurity',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./socialSecurity')));
    }
};