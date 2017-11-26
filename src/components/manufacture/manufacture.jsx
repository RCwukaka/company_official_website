import React from 'react';
import { Grid,Row,Col,Image,PageHeader,blockquote,Thumbnail,Modal} from 'react-bootstrap';

const Manufacture = React.createClass({

  getInitialState: function() {
    return {
      line:false,
      baozhuang:false,
      jishulanling:false,
      zhengti:false,
      jiaoyan:false,
      wuliucangchu:false
    };
  },
  lineOut(){
    this.setState({
      line: true
    });
  },
  baozhuangOut(){
    this.setState({
      baozhuang: true
    });
  },
  jiaoyanOut(){
    this.setState({
      jiaoyan: true
    });
  },
  wuliucangchuOut(){
    this.setState({
      wuliucangchu: true
    });
  },
  jishulanlingOut(){
    this.setState({
      jishulanling: true
    });
  },
  zhengtiOut(){
    this.setState({
      zhengti: true
    });
  },
  linehide(){
    this.setState({
      line: false
    });
  },
  baozhuanghide(){
    this.setState({
      baozhuang: false
    });
  },
  jiaoyanhide(){
    this.setState({
      jiaoyan: false
    });
  },
  wuliucangchuhide(){
    this.setState({
      wuliucangchu: false
    });
  },
  jishulanlinghide(){
    this.setState({
      jishulanling: false
    });
  },
  zhengtihide(){
    this.setState({
      zhengti: false
    });
  },  
  render() {
      return (
        <div>
          <Image src="assets/img/team.png" style={{width:'100%'}}></Image>
          <div style={{paddingTop:20}}>
              <Grid>
               <Row>
                  <PageHeader>
                    <h6 className="lead text-center">制造外包服务
                      <small>/manufacture</small>
                    </h6>
                  </PageHeader>
               </Row>
               <Row style={{marginTop:'40px'}}>
                  <Col md={2}>
                  </Col>
                  <Col md={8}>
                    <blockquote>
                      <small className="text-muted">联智汇通为可和提供包括
                        <small className="text-success">生产线外包</small>，
                        <small className="text-success">包装外包</small>，
                        <small className="text-success">校验外包</small>，
                        <small className="text-success">物流仓储外包</small>，
                        <small className="text-success">技术蓝领外包</small>，
                        <small className="text-success">整体外包</small>等生产技术外包服务。</small><br/>
                      <small className="text-muted">通过制造外包的方式帮助企业真正实现降低成本，提高生产效率，充分发挥企业的核心竞争力。</small>
                    </blockquote>
                  </Col>
                  <Col md={2}>
                  </Col>
               </Row>
            </Grid>
            <Grid>
                <Row>
                  <PageHeader>
                    <h6 className="lead text-center">服务类型
                    </h6>
                  </PageHeader>
               </Row>
                <Row style={{marginTop:'80px',marginBottom:'20px'}}>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.lineOut}>
                        <Image src="/assets/img/shengchanxian.png" />
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>生产线外包</p>
                      </Thumbnail>
                       <Modal bsSize='large' show={this.state.line} onHide={this.linehide}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>生产线外包</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <small>将企业的非核心生产，制造加工业务交由给专业的外包服务商，由外包服务商提供专业的人事管理与生产制造服务</small><br/>
                            <small>从而降低成本，提高效率，增强自身竞争力。</small><br/>
                          </Modal.Body>
                        </Modal>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.baozhuangOut}>
                        <Image src="/assets/img/baozhuangwaibao.png"/>
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>包装外包</p>
                      </Thumbnail>
                      <Modal bsSize='large' show={this.state.baozhuang} onHide={this.baozhuanghide}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>包装外包</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <small>外包服务商承接企业生产中非核心的成品或半成品包装流程，通过对各种包装流程的优化，体现成本费用上的优势。</small><br/>
                            <small>外包灵活用工机制可较好弥补企业订单不问，品种少量多样的不足，产品包装费也相对固定。</small><br/>
                            <small>可为企业全方位控制成本，提升效率。</small><br/>
                          </Modal.Body>
                        </Modal>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.jiaoyanOut}>
                        <Image src="/assets/img/jiaoyan.png"/>
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>校验外包</p>
                      </Thumbnail>
                      <Modal bsSize='large' show={this.state.jiaoyan} onHide={this.jiaoyanhide}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>校验外包</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <small>企业委托外包服务商进行产品校验检测工作，承接企业生产制造中的质量检测环节，包括产品校验，产品分类挑选等。</small><br/>
                            <small>为企业避免临时性，阶段性用工带来的管理压力与用工风险，降低企业综合成本。</small><br/>
                          </Modal.Body>
                        </Modal>
                  </Col>
                </Row>
                <Row style={{marginBottom:'20px'}}>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.wuliucangchuOut}>
                        <Image src="/assets/img/wuliu.png" />
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>物流仓储外包</p>
                      </Thumbnail>
                      <Modal bsSize='large' show={this.state.wuliucangchu} onHide={this.wuliucangchuhide}>
                        <Modal.Header closeButton>
                          <h5 className='text-center lead'>物流仓储外包</h5>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                          <small>企业将货物和产品的仓储，管理，整理，配送等业务交由专业的外包服务商完成，外包服务商通过优化物流供应链管理，降低企业物流成本，提高综合服务质量。</small><br/>
                        </Modal.Body>
                      </Modal>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.jishulanlingOut}>
                        <Image src="/assets/img/jishulanling.png"/>
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>技术蓝领外包</p>
                      </Thumbnail>
                      <Modal bsSize='large' show={this.state.jishulanling} onHide={this.jishulanlinghide}>
                        <Modal.Header closeButton>
                          <h5 className='text-center lead'>技术蓝领外包</h5>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                          <small>将生产部门中含有一定技术含量的非核心岗位，如维修工，焊接工等交由专业外包服务商进行招募，培训和管理。</small><br/>
                          <small>把一些重复性非核心的技术岗位从整体生产流程中分化出来，减少企业招募，培训员工单机人员分流的压力。</small><br/>
                        </Modal.Body>
                      </Modal>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail style={{cursor:'pointer'}} onClick={this.zhengtiOut}>
                        <Image src="/assets/img/shebaoservice.png"/>
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>整体外包</p>
                      </Thumbnail>
                      <Modal bsSize='large' show={this.state.zhengti} onHide={this.zhengtihide}>
                        <Modal.Header closeButton>
                          <h5 className='text-center lead'>整体外包</h5>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                          <small>将整个生产车间或生产厂区全部委托外包服务商进行管理。</small><br/>
                          <small>外包服务商从人员招募，培训，资源规划，员工关系，薪资结算，绩效管理到订单管理，生产达成，品质管控等一系列过程的跟踪和实施。</small><br/>
                          <small>协助企业提高整体运营效率，全方位为企业降低风险。</small><br/>
                        </Modal.Body>
                      </Modal>
                  </Col>
                </Row>
            </Grid>
          </div>
        </div>
      );
    }
});

module.exports =  Manufacture;


