import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Panel,Pager,Navbar,NavItem,Nav,NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MainBusiness = React.createClass({
    render() {
        return (
          <div>
            <Image src="assets/img/team.png" style={{width:'100%'}}></Image>
            <Navbar className= 'navbar navbar-default navbar-embossed' collapseOnSelect>
              <Navbar.Collapse>
                <Nav>
                  <LinkContainer to="/mainBusiness/human">
                      <NavItem eventKey={1}>人力资源服务</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/mainBusiness/manufacture">
                      <NavItem eventKey={2}>制造服务外包</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/mainBusiness/socialSecurity">
                      <NavItem eventKey={3}>社保托管服务</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {this.props.children}
          </div>
        );
    }
});

module.exports =  MainBusiness;


