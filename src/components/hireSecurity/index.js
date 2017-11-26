module.exports = {
    path: 'hireSecurity',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./hireSecurity')));
    }
};