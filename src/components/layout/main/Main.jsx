import React from 'react';
import { Row,Col,Grid } from 'react-bootstrap';


const Main = React.createClass({
    render() {
      const { children } = this.props;
      return (
        <div id='main' style={{minHeight:900}}>
          {this.props.children}
        </div>
      );
    }
});

module.exports =  Main;

