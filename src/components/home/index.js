module.exports = {
    path: 'home',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./Home')));
    }
};