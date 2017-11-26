module.exports = {
    path: 'newsCenter',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./newsCenter')));
    }
};