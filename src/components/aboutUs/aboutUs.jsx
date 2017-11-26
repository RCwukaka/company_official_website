import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Well } from 'react-bootstrap';


const AboutUs = React.createClass({
    render() {
        return (
          <div>
            <Grid>
             <Row>
              <Col xs={24} md={12}>
                <Well className="well-company">
                   <div className="company-text">
                      <PageHeader><h6 className="text-center lead">公司简介</h6><h5 className="text-center">CORPORATE OVERVIEWS</h5></PageHeader>
                      <div className="company-text-content">
                        <p>杭州联智汇通人力资源开发有限公司（简称“联智汇通”英文TalentAlly”）成立于2010年，注册资金200万，
                          是一家集人力资源服务外包、劳务派遣、制造业服务外包、酒店业服务外包、社会保险及公积金代缴、商业保险服务、
                          猎头服务、代发工资等人力资源服务及法律、劳动事务咨询等业务为一体的服务外包企业。。</p>
                      </div>
                    </div>
                </Well>
              </Col>
             </Row>
           </Grid>
           <div style={{backgroundColor:"#fafafa",padding:"50px 0"}}>
              <Grid>
                 <Row>
                    <p className="lead text-center">做最专业的人才资本与管理提升的专业合伙企业。</p>
                    <h6 className="text-muted text-center">To be a professional partnership with the most professional talent capital and management.</h6>
                 </Row>
              </Grid>
            </div>
           <div style={{backgroundColor:"#fafafa",padding:"50px 0"}}>
             <Grid>
               <Row>
                <Col xs={6} md={6}>
                  <Image src="assets/img/wangdianfenbu.jpg" style={{width:'100%'}}></Image>
                </Col>
                <Col xs={6} md={6}>
                  <h6 className="text-muted text-center lead">网点分布</h6>
                  <p>联智汇通秉承“做企业最专业的人力资资本与管理提升的专业合伙”的服务理念，汇聚业内精英；为企业提供最佳组合的人力资源整体解决方案，
                  帮助提升企业的核心竞争力，提高企业的管理及生产效能，让企业更专注于企业战略管理及核心业务发展，为企业解决后顾之忧。</p>
                 </Col>
               </Row>
               </Grid>
            </div>
            <Grid>
               <Row>
                  <PageHeader><h6 className="text-center lead">合作客户</h6></PageHeader>
               </Row>
               <Row>
                <Col xs={24} md={12}>
                  <Image src="assets/img/hezuoshanghu.jpg" style={{width:'100%'}}></Image>
                </Col>
               </Row>
            </Grid>
            </div>
          );
    }
});

module.exports =  AboutUs;


