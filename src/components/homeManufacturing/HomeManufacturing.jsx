import React from 'react';
import { Grid,Row,Col,Thumbnail,Image,PageHeader } from 'react-bootstrap';


const HomeManufacturing = React.createClass({
    render() {
        return (
          <div className='manufacture_box'>
            <Grid>
               <Row>
                  <PageHeader><h6 className="lead text-center">制造外包<small className="text-muted">/manufacture</small></h6></PageHeader>
               </Row>
            </Grid>
            <Grid>
              <Row>
                  <h6 className="lead text-center text-muted">提高核心竞争力</h6>
               </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <Image src="/assets/img/manufacturehome.png" style={{width:'100%'}}/>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className='manufacture_text'>
                    <h6 className='text-muted'>生产线人力资源外包是联智汇通集多年人力资源外包服务经验和优势，
                    成功开发并成功运营的跨人力资源和生产作业现场管理领域的一个全新的外包服务产品.</h6>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
});

module.exports =  HomeManufacturing;

