import React from 'react'

const PageNotFound = React.createClass({
    render() {
        return (
            <div id="content">
                <br/>
                <div className="col-12 col-offset-6">
                    <div className="text-center">
                        <h1 className="bounceInDown animated">Error 404</h1>
                        <h2>
                            <strong>
                                <i className="fa fa-fw fa-exclamation-circle fa-lg text-warning"/>Page Not Found
                            </strong>
                        </h2>
                        <br/>
                        <p className="lead">您访问的页面不存在，您可以再刷新浏览器或联系系统管理员。</p>
                        <br/>
                        <div className="well well-lg"
                             style={{backgroundColor: '#fbfbfb', border: '1px solid #ddd', width: '300px', margin: '0 auto 20px', padding: '10px'}}>
                            <div className="input-group input-group-lg">
                                <input className="form-control" type="text" placeholder="让我们再试试这个"/>
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default">
                                        <i className="fa fa-fw fa-lg fa-search"/>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <ul className="list-inline">
                            <li><a href="#/dashboard"><i className="fa fa-lg fa-fw fa-home"/>控制台</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PageNotFound;