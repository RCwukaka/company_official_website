var scripts = {
    "aliases": {
        "base64": "/web/plugin/sec/base64.js",
        "jsbn": "/web/plugin/sec/jsbn.js",
        "prng4": "/web/plugin/sec/prng4.js",
        "rng": "/web/plugin/sec/rng.js",
        "rsa": "/web/plugin/sec/rsa.js",
        "react/lib": "/node_modules/react/lib",
        "react": "/node_modules/react/dist/react.min.js",
        "react-dom": "/node_modules/react-dom/dist/react-dom.min.js",
        "react-router": "/node_modules/react-router/umd/ReactRouter.min.js",
        "history": "/node_modules/history/umd/history.min.js",
        "jquery": "/node_modules/jquery/dist/jquery.min.js",
        "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap.min.js"
    },
    "chunks": {
        "vendor": [
            "jquery",
            "react",
            "react-dom",
            "react-router"
        ]
    },
    "noParse": [
        "jquery",
        "bootstrap"
    ]
};

module.exports = scripts;