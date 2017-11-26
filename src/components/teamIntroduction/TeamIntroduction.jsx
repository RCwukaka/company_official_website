import React from 'react';
import { Grid,Row,Col,Thumbnail,Image,PageHeader } from 'react-bootstrap';


const TeamIntroduction = React.createClass({
    render() {
        return (
          <div style={{paddingTop:10}}>
            <Grid>
               <Row>
                  <PageHeader><h6 className="lead text-center">团队成员<small className="text-muted">/team introduct</small></h6></PageHeader>
               </Row>
            </Grid>
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <div className="tile">
                    <Image src="/assets/img/test.jpg" circle className="tile-image big-illustration"/>
                    <h3 className="tile-title">郭金玉</h3>
                    <p>郭金玉</p>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="tile">
                    <Image src="/assets/img/test.jpg" circle className="tile-image big-illustration"/>
                    <h3 className="tile-title">CFO</h3>
                    <p>100% convertable to HTML/CSS layout.</p>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="tile">
                    <Image src="/assets/img/test.jpg" circle className="tile-image big-illustration"/>
                    <h3 className="tile-title">COO</h3>
                    <p>100% convertable to HTML/CSS layout.</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
});

module.exports =  TeamIntroduction;

