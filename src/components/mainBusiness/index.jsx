
module.exports = {
    path: 'mainBusiness',
    getComponent: (nextState, callback) => {
        return require.ensure([], require => callback(null, require('./mainBusiness')));
    }
};
