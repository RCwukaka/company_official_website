module.exports = {
    path: 'human',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./human')));
    }
};