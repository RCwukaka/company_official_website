import React from 'react';
import { Grid,Row,Col,Button,Image,PageHeader,Thumbnail,Navbar,Nav,NavDropdown,MenuIte } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const PrimaryBusiness = React.createClass({
    render() {
        return (
          <div>
            <Grid>
               <Row>
                  <PageHeader>
                    <h6 className="lead text-center">主营业务
                      <small className="text-muted">/business</small>
                    </h6>
                  </PageHeader>
               </Row>
            </Grid>
            <div>
              <Grid>
                  <Row>
                    <Col xs={6} md={3}>
                     <LinkContainer to="/human">
                        <Thumbnail>
                          <Image src="/assets/img/renliicon.png" />
                          <p className="text-center" style={{fontWeight:300,marginTop:20}}>人才资本服务</p>
                          <p style={{marginTop:20,textIndent:20}}><small>提供全方位或个性化服务，成为企业人力资源部门的好帮手级专业顾问</small></p>
                        </Thumbnail>
                      </LinkContainer>
                    </Col>
                    <Col xs={6} md={3}>
                      <LinkContainer to="/manufacture">
                        <Thumbnail>
                          <Image src="/assets/img/zhizaowaibao.png"/>
                          <p className="text-center" style={{fontWeight:300,marginTop:20}}>制造外包</p>
                           <p style={{marginTop:20,textIndent:20}}><small>将企业非核心，制造，加工业务交由专业的外包服务商，提高效率，增强自身的竞争力</small></p>
                        </Thumbnail>
                       </LinkContainer>
                    </Col>
                    <Col xs={6} md={3}>
                      <LinkContainer to="/socialSecurity">
                        <Thumbnail>
                          <Image src="/assets/img/shebaoservice.png"/>
                          <p className="text-center" style={{fontWeight:300,marginTop:20}}>社保托管</p>
                          <p style={{marginTop:20,textIndent:20}}><small>帮助人力资源部门从繁重的重复性事务中解脱，专注于核心的战略性工作，从而提升人力资源管理的高度和核心竞争力</small></p>
                        </Thumbnail>
                      </LinkContainer>
                    </Col>
                    <Col xs={6} md={3}>
                      <LinkContainer to="/hireSecurity">
                        <Thumbnail>
                          <Image src="/assets/img/baoxian.png" />
                          <p className="text-center" style={{fontWeight:300,marginTop:20}}>雇安保</p>
                          <p style={{marginTop:20,textIndent:20}}><small>规避用工过程中员工收到意外伤害给企业带来的经济风险</small></p>
                        </Thumbnail>
                      </LinkContainer>
                    </Col>
                  </Row>
              </Grid>
            </div>
          </div>
        );
    }
});

module.exports =  PrimaryBusiness;

