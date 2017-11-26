import React from 'react';

let Page404 = React.createClass({
    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-center error-box">
                                    <h1 className="error-text tada animated"><i className="fa fa-times-circle text-danger error-icon-shadow"/> 404 </h1>
                                    <h2 className="font-xl"><strong>页面逃离地球！</strong></h2>
                                    <br/>
                                    <p className="lead semi-bold">
                                        <strong></strong><br/><br/>
                                        <small>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page404;
