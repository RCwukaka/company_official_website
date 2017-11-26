
import './less/main.less';
import React from 'react';
import { render } from 'react-dom';
import { Router,hashHistory} from 'react-router';
import assign from 'object-assign';
import { ROUTES } from './config';

$.ajaxSetup({
    dataType: 'json'
});

function getChildRoutes(routes) {
    return routes.map(route => {
        if (route.childRoutes) {
            route.childRoutes = getChildRoutes(route.childRoutes);
            return route;
        }
        return assign(route);
    });
}

window.jQuery = require('jquery');


$.ajaxSetup({
    dataType: 'json'
});


function getChildRoutes(routes) {
    return routes.map(route => {
        if (route.childRoutes) {
            route.childRoutes = getChildRoutes(route.childRoutes);
            return route;
        }
        return assign(route);
    });
}

const Routes = assign({
    path: '/', //之前的路由
    component: require('./components/Index'),
    indexRoute: {onEnter: (nextState, replace) => replace('/home')},
    childRoutes: [
        {
            getComponent: (nextState, callback) => {
                return require.ensure([], require => callback(null, require('./components/layout/Layout')));
            },
            childRoutes: getChildRoutes(ROUTES)
        },
        {
            path: '*',
            getComponent: (nextState, callback) => {
                return require.ensure([], require => callback(null, require('./components/misc/PageNotFound')));
            }
        }
    ]
});

const root = render(
    <Router history={hashHistory} routes={Routes}/>, 
    document.getElementById('best-react-root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [root];
        }
    });
}


