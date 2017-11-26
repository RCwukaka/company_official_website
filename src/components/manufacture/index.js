module.exports = {
    path: 'manufacture',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./manufacture')));
    }
};