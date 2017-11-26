import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Panel,Pager,Navbar,NavItem,Nav,NavDropdown,Button,Modal} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Human = React.createClass({

  getInitialState: function() {
    return {
      ziyun:false,
      relation:false,
      lawyer:false,
      hr:true,
      dangan:false,
      zhaopin:false,
      xinchoufuli:false
    };
  },

  showZiyun(){
    this.setState({
     ziyun:true
    });
  },
  showRelation(){
    this.setState({
      relation: true
    });
  },
  showLawyer(){
    this.setState({
      lawyer: true
    });
  },
  closeZiyun(){
    this.setState({
     ziyun:false
    });
  },
  closeRelation(){
    this.setState({
     relation:false
    });
  },
  closeLawyer(){
    this.setState({
     lawyer:false
    });    
  },
  showHr(){
    this.refs.hrTab.className='active';
    this.refs.danganTab.className='';
    this.refs.zhaopinTab.className='';
    this.setState({
     hr:true,
     dangan:false,
     zhaopin:false
    });
  },
  showDangan(){
    this.refs.hrTab.className='';
    this.refs.danganTab.className='active';
    this.refs.zhaopinTab.className='';
    this.setState({
     hr:false,
     dangan:true,
     zhaopin:false
    });
  },
  showZhaopin(){
    this.refs.hrTab.className='';
    this.refs.danganTab.className='';
    this.refs.zhaopinTab.className='active';
    this.setState({
     hr:false,
     dangan:false,
     zhaopin:true
    });
  },
  showXinchoufuli(){
    this.setState({
      xinchoufuli:true 
    });
  },
  closeXinchoufuli(){
    this.setState({
      xinchoufuli: false
    });
  },

  render() {
      return (
        <div>
          <Image src="assets/img/renliziyuan_header.jpg" style={{width:'100%'}}></Image>
          <div style={{marginTop:20}}>
            <Grid>
               <Row>
                  <PageHeader>
                    <h6 className="lead text-center">人才资本服务
                      <small>/Human resource service</small>
                    </h6>
                    <p className="text-center text-muted"><small>提供公司管理咨询，人事管理，薪酬管理等服务。</small></p>
                  </PageHeader>
               </Row>
            </Grid>
            <Grid style={{paddingTop:60}}>
              <Row>
                <Col xs={12} md={6}>
                  <Image src='assets/img/renliziyuanzixun3.jpg' rounded style={{width:"100%"}}/>
                </Col>
                <Col xs={12} md={6}>
                  <div>
                    <h5 className='lead'>公司管理咨询</h5>
                    <ul style={{listStyleType: 'disc'}}>
                      <li><small>人力资源管理诊断：人力资源规划、 职位分析与职位评价....</small></li>
                      <li><small>组织架构设计咨询：组织结构设计、部门职责与责任体系设计....</small></li>
                      <li><small>数据信息服务：提供定制化的分行业薪酬调研服务....</small></li>
                      <li><small>雇佣模式优化：在合规的基础上，为企业提供最合理....</small></li>
                      <li><small>冗员安置与离职管理：我们针对需求提供法律咨询、案例分享...</small></li>
                    </ul>
                    <Button bsStyle="primary" bsSize="small" onClick={this.showZiyun}>了解更多</Button>
                    <Modal bsSize='large' show={this.state.ziyun} onHide={this.closeZiyun}>
                      <Modal.Header closeButton>
                        <h5 className='text-center lead'>公司管理咨询</h5>
                      </Modal.Header>
                      <Modal.Body>
                         <h6>1.人力资源管理诊断：</h6>
                         <small>人力资源规划、 职位分析与职位评价、胜任力模型建立、绩效管理体系设计、薪酬激励与福利体系设计、企业并购重组与人力资源管理整合方案设计。</small>
                         <h6>2.组织架构设计咨询：</h6>
                         <small>组织结构设计、部门职责与责任体系设计、集团化管控和母子公司体系设计、管理流程设计与再造。</small>
                         <h6>3.数据信息服务：</h6>
                         <small>提供定制化的分行业薪酬调研服务、员工满意度调查、跨文化调研等信息服务，为企业人力资源管理决策提供参考。</small>
                         <h6>1.合规审计与风险管控：</h6><small>分类梳理和审查修订企业的雇佣文本和法律文本，协助您有效达成风险管控，加强对内部管理流程进行查漏补缺，提升管理的合规化运作。</small><br/>
                         <h6>2.企业转型时期HR合规管理：</h6><small>针对企业转型时期的雇佣方案调整，提供从方案设计到转移实施乃至后续维护的全程解决方案，在确保合规的前提下帮助企业有效控制成本，助力企业转型战略。</small><br/>
                         <h6>3.冗员安置与离职管理：</h6><small>我们针对需求提供法律咨询、案例分享以及一站式服务，全力帮助您在预定的时间节点达成项目，有效实现风险管理和成本控制的双重目标。</small><br/>
                         <h6>4.雇佣模式优化：</h6><small>在合规的基础上，为企业提供最合理的雇佣优化方案，包括劳务派遣、兼职代理、劳务合作等，同时提供雇佣管理相关的优化服务。</small><br/>
                         <small>依托资深的法律团队和多年的专业经验，能为您提供兼顾劳动人事法律与人力资源管理的复合型服务。集咨询、处理、信息、交流互动、项目风险管控为一体，兼顾争议预防与纠纷处理，
                          让您从容化解各类用工风险，积极规避各类法律风险，构建和谐双赢的劳资关系，提升员工的稳定性和企业承担风险的能力。</small>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Col>
              </Row>
            </Grid>
           </div>
            <div style={{marginTop:140,backgroundColor: '#f9f9f9'}}>
            <Grid>
               <Row>
                  <PageHeader>
                    <h6 className="text-muted text-center">人事代理
                    </h6>
                  </PageHeader>
               </Row>
               <Row>
                  <ul className="nav nav-pills nav-justified">
                    <li role="presentation" className="active" ref='hrTab'><a href="javascript:void(0)" onClick={this.showHr}>基本人事服务</a></li>
                    <li role="presentation" ref='danganTab'><a href="javascript:void(0)" onClick={this.showDangan}>档案管理</a></li>
                    <li role="presentation" ref='zhaopinTab'><a href="javascript:void(0)" onClick={this.showZhaopin}>人才招聘</a></li>
                  </ul>
               </Row>
            </Grid>
            <Grid style={{minHeight:480}}>
            {this.state.hr?
              <Row style={{paddingTop:60}}>
                <Col xs={12} md={6}>
                  <h6 className='lead text-center'>基本人事服务</h6>
                  <small>员工入职/离职：员工个人材料催收、收集情况的登录签收、办理员工录用、离职的相关手续</small><br/>
                  <small>各种证件办理：为符合条件的员工办理就业证、居住证等</small><br/>
                  <small>代办退休手续、任职资格认证/评定等</small><br/>
                  <small>政策咨询：向客户及雇员提供有关劳动人事方面的政策咨询</small><br/>
                  <small>劳动争议：负责调解派遣类员工的一般劳动争议，协助处理员工和企业的关系</small><br/>
                  <small>集体户口：办理员工集体户口的挂靠</small><br/>
                  <small>体检服务：代理员工入职体检及年度体检</small><br/>
                  <small>薪酬管理：员工工资代发及个税扣缴</small>
                </Col>
                <Col xs={12} md={6}>
                  <Image src='assets/img/hr.jpg' style={{width:"100%"}} rounded/>
                </Col>
              </Row>:<div/>}
              {this.state.dangan?
                <Row style={{paddingTop:60}}>
                  <Col xs={12} md={6}>
                    <h6 className='lead text-center'>档案管理</h6>
                    <small>人事档案管理：</small><br/>
                    <small>人事档案调入(本地/外地/转业/复员/应届毕业生分配)、档案调出</small>
                  </Col>
                  <Col xs={12} md={6}>
                    <Image src='assets/img/dangan.jpg' style={{width:"100%"}} rounded/>
                  </Col>
                </Row>:<div/>}
                {this.state.zhaopin?
                  <Row style={{paddingTop:60}}>
                    <Col xs={12} md={6}>
                      <Image src='assets/img/lietouzhaopin.jpg' rounded style={{width:"100%"}}/>
                    </Col>
                    <Col xs={12} md={6}>
                      <h5 className='lead'>猎头招聘（EXECUTIVE SEARCH）</h5>
                      <ul style={{listStyleType: 'disc'}}>
                        <li><small>高级人才招聘：凭借着遍布全国的服务网络和专业的顾问团队，提供覆盖各个行业的高端管理人才和高端技术人才的猎头业务。</small></li>
                        <li><small>专业人才招聘：多年的专业经验和优秀咨询团队，准确理解客户对人才的需求，通过行业领先的人才库支持，为客户高效甄选最合适的优秀人才。</small></li>
                        <li><small>通用人才招聘：依托强大的人才库和信息平台，提供通用人才的全国一站式招聘服务，让您高效安心的招到所需人才。</small></li>
                      </ul>
                    </Col>
                  </Row>:<div/>}
            </Grid>
           </div>
           <div>
            <Grid style={{marginTop:120}}>
               <Row>
                  <PageHeader>
                    <h6 className="text-muted text-center">薪酬福利管理
                    </h6>
                  </PageHeader>
               </Row>
            </Grid>
            <Grid style={{marginBottom:120}}>
              <Row>
                <Col xs={12} md={6}>
                  <h5 className='lead'>薪酬/福利</h5>
                  <small>制作全面的薪酬报表，用于商业分析；</small><br/>
                  <small>管理多个薪资帐套和薪资周期；</small><br/>
                  <small>计算收入和净收入、个人所得税和社保缴纳金额；</small><br/>
                  <small>检查数据准确性和完整性；</small><br/>
                  <small>在整合了丰富行业经验的基础上....</small><br/><br/>
                  <Button bsStyle="primary" bsSize="small" onClick={this.showXinchoufuli}>了解更多</Button>
                    <Modal bsSize='large' show={this.state.xinchoufuli} onHide={this.closeXinchoufuli}>
                      <Modal.Header closeButton>
                        <h5 className='text-center lead'>薪酬/福利</h5>
                      </Modal.Header>
                      <Modal.Body>
                        <small>制作全面的薪酬报表，用于商业分析；</small><br/>
                        <small>管理多个薪资帐套和薪资周期；</small><br/>
                        <small>计算收入和净收入、个人所得税和社保缴纳金额；</small><br/>
                        <small>检查数据准确性和完整性；</small><br/>
                        <small>递交薪酬报告供客户确认；</small><br/>
                        <small>抵扣个人所得税，并将税费缴纳至指定的政府机构；</small><br/>
                        <small>以电子支付方式将净工资划拨到员工的银行账户，为员工提供书面或电子工资单；</small><br/>
                        <small>根据政府规定，处理个人所得税申报；</small><br/>
                        <small>在整合了丰富行业经验的基础上，综合企业实际经营发展情况及员工实际所需，为企业提供用工风险及福利计划的专业咨询及代理，
                        为企业及员工在实际工作中提供多一重的贴心保障，其内容包括为员工提供从生活到工作，从学习到发展的一系列福利计划。</small><br/>
                      </Modal.Body>
                    </Modal>
                </Col>
                <Col xs={12} md={6} style={{padding:0}}>
                  <Image src='assets/img/xinchoufuli1.jpg' rounded style={{width:"100%"}}/>
                </Col>
              </Row>
            </Grid>
           </div>
        </div>
      );
    }
});

module.exports =  Human;


