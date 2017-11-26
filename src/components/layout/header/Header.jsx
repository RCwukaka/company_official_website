import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = React.createClass({
  render() {
      return (
        <Navbar className= 'navbar navbar-default navbar-embossed' collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">联智汇通</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/home">
                    <NavItem eventKey={1}>首页</NavItem>
                </LinkContainer>
                  <LinkContainer to="/human">
                      <NavItem eventKey={2}>人才资本服务</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/manufacture">
                      <NavItem eventKey={3}>制造外包</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/socialSecurity">
                      <NavItem eventKey={4}>社保托管</NavItem>
                  </LinkContainer>
                <LinkContainer to="/hireSecurity">
                    <NavItem eventKey={5}>雇安保</NavItem>
                </LinkContainer>
                <LinkContainer to="/aboutUs">
                    <NavItem eventKey={7}>关于我们</NavItem>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
});
module.exports = Header;

