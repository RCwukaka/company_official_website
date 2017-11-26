import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Panel,Pager,Navbar,NavItem,Nav,NavDropdown,Thumbnail,Button,Media,Modal} from 'react-bootstrap';

const SocialSecurity = React.createClass({

  getInitialState(){
    return {
      online:true,
      downline:false,
      shebaodaili:false,
      yuhangshebaojisuan:false,
      shengyujisuan:false,
      gongzidaifajisuan:false,
      shebaodailijisuan:false,
      shiminkajisuan:false
    }
  },

  showDownline(){
    this.setState({online:false,downline:true});
  },

  showOnline(){
    this.setState({online:true,downline:false});
  },
  showShebaodaili(){
      this.setState({shebaodaili:true});
  },
  closeShebaodaili(){
    this.setState({shebaodaili:false});
  },
  showyuhangShebaodaili(){
      this.setState({yuhangshebaojisuan:true});
  },
  closeyuhangShebaodaili(){
    this.setState({yuhangshebaojisuan:false});
  },
  showshengyujisuan(){
      this.setState({shengyujisuan:true});
  },
  closeshengyujisuan(){
    this.setState({shengyujisuan:false});
  },
  showgongzidaifajisuan(){
      this.setState({gongzidaifajisuan:true});
  },
  closegongzidaifajisuan(){
    this.setState({gongzidaifajisuan:false});
  },
  showshebaodailijisuan(){
      this.setState({shebaodailijisuan:true});
  },
  closeshebaodailijisuan(){
    this.setState({shebaodailijisuan:false});
  },
  showshiminkajisuan(){
      this.setState({shiminkajisuan:true});
  },
  closeshiminkajisuan(){
    this.setState({shiminkajisuan:false});
  },

  render() {
    let online = this.state.online;
    let downline = this.state.downline;
      return (
        <div>
          <Image src="assets/img/shebao_header.jpg" style={{width:'100%'}}></Image>
          <div style={{paddingTop:10}}>
            <Grid>
               <Row>
                  <PageHeader>
                    <h6 className="lead text-center">社保服务
                      <small>/Social security service
                      </small>
                    </h6>
                    <p className="text-muted text-center"><small>向企业提供社保代缴、公积金代缴、工资代发和个税代缴服务，以及其他人事代理服务。</small></p>
                  </PageHeader>
               </Row>
            </Grid>
          </div>
        <div style={{paddingTop:30}}>
            <Grid>
              <Row>
                <Col xs={8} md={4}>
                    <Thumbnail>
                      <Image src="/assets/img/shenbao.png" />
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>杭州社保公积金代缴</p>
                      <p style={{marginTop:20,textIndent:20}}><small>为客户办理主城区养老、医疗、失业、工伤和生育保险，以及住房公积金。</small></p>
                      <p>
                        <Button bsStyle="info" onClick={this.showShebaodaili}>查看详情</Button>
                        <Modal bsSize='large' show={this.state.shebaodaili} onHide={this.closeShebaodaili}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>杭州社保公积金代缴</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <Image src="/assets/img/hangzhoushebaojisuan.jpg" />
                          </Modal.Body>
                        </Modal>
                      </p>
                    </Thumbnail>
                </Col>
                <Col xs={8} md={4}>
                    <Thumbnail>
                      <Image src="/assets/img/zhizaowaibao.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>余杭社保公积金代缴</p>
                      <p style={{marginTop:20,textIndent:20}}><small>为客户办理余杭区养老、医疗、失业、工伤和生育保险，以及住房公积金。</small></p>
                      <p>
                        <Button bsStyle="info" onClick={this.showyuhangShebaodaili}>查看详情</Button>
                        <Modal bsSize='large' show={this.state.yuhangshebaojisuan} onHide={this.closeyuhangShebaodaili}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>杭州社保公积金代缴</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <Image src="/assets/img/yuhangshebaojisuan.jpg" />
                          </Modal.Body>
                        </Modal>
                      </p>
                    </Thumbnail>
                </Col>
                <Col xs={8} md={4}>
                    <Thumbnail>
                      <Image src="/assets/img/youer.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>生育金申领</p>
                      <p style={{marginTop:20,textIndent:20}}><small>代办包括检查费用、接生费用、手术费用、住院费用报销。</small></p>
                      <p>
                        <Button bsStyle="info" onClick={this.showshengyujisuan}>查看详情</Button>
                        <Modal bsSize='large' show={this.state.shengyujisuan} onHide={this.closeshengyujisuan}>
                          <Modal.Header closeButton>
                            <h5 className='text-center lead'>生育金申领</h5>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <Image src="/assets/img/shengyujintiejisuan.jpg" />
                          </Modal.Body>
                        </Modal>
                      </p>
                    </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </div>
          <div style={{paddingTop:30}}>
            <Grid>
              <Row>
                  <Col xs={8} md={4}>
                      <Thumbnail>
                        <Image src="/assets/img/dollar.png" />
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>工资代发个税申报</p>
                        <p style={{marginTop:20,textIndent:20}}><small>为客户办理代缴个人所得税，代发工资、纳税筹划等业务。</small></p>
                        <p>
                          <Button bsStyle="info" onClick={this.showgongzidaifajisuan}>查看详情</Button>
                          <Modal bsSize='large' show={this.state.gongzidaifajisuan} onHide={this.closegongzidaifajisuan}>
                            <Modal.Header closeButton>
                              <h5 className='text-center lead'>工资代发个税申报</h5>
                            </Modal.Header>
                            <Modal.Body className="text-center">
                              <Image src="/assets/img/gongzidaifajisuan.jpg" />
                            </Modal.Body>
                          </Modal>
                        </p>
                      </Thumbnail>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail>
                        <Image src="/assets/img/move.png" />
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>社保转移</p>
                        <p style={{marginTop:20,textIndent:20}}><small>为客户将养老保险和医疗保险从外地转入杭州市区，或从杭州市区转入外地。</small></p>
                        <p>
                          <Button bsStyle="info" onClick={this.showshebaodailijisuan}>查看详情</Button>
                          <Modal bsSize='large' show={this.state.shebaodailijisuan} onHide={this.closeshebaodailijisuan}>
                            <Modal.Header closeButton>
                              <h5 className='text-center lead'>工资代发个税申报</h5>
                            </Modal.Header>
                            <Modal.Body className="text-center">
                              <Image src="/assets/img/shebaodailijisuan.jpg" />
                            </Modal.Body>
                          </Modal>
                        </p>
                      </Thumbnail>
                  </Col>
                  <Col xs={8} md={4}>
                      <Thumbnail>
                        <Image src="/assets/img/renliicon.png"/>
                        <p className="text-center" style={{fontWeight:300,marginTop:20}}>市民卡代办</p>
                        <p style={{marginTop:20,textIndent:20}}><small>帮助客户办理市民卡，市民卡具有医保卡、公交卡等功能。</small></p>
                        <p>
                          <Button bsStyle="info" onClick={this.showshiminkajisuan}>查看详情</Button>
                          <Modal bsSize='large' show={this.state.shiminkajisuan} onHide={this.closeshiminkajisuan}>
                            <Modal.Header closeButton>
                              <h5 className='text-center lead'>工资代发个税申报</h5>
                            </Modal.Header>
                            <Modal.Body className="text-center">
                              <Image src="/assets/img/shiminkajisuan.jpg" />
                            </Modal.Body>
                          </Modal>
                        </p>
                      </Thumbnail>
                  </Col>
                </Row>
             </Grid>
            </div>
            <div style={{marginTop:80,paddingTop:30}}>
              <Grid>
                <Row>
                  <PageHeader>
                    <h6 className="text-muted text-center text-success">办理社保代缴的具体流程
                    </h6>
                    <h1 className="text-muted text-center">SPECIFIC PROCESS
                    </h1>
                  </PageHeader>
                </Row>
                <Row>
                  <div className="text-center">
                    <Button bsStyle="primary" bsSize="large" style={{marginRight:'50px'}} onClick={this.showOnline}>线上办理流程</Button>
                    <Button bsStyle="primary" bsSize="large" onClick={this.showDownline}>线下办理流程</Button>
                  </div>
                </Row>
                {online?
                  <Row>
                    <div className="i4_chose">
                    <ul className="clearfix" style={{listStyle:'none',marginTop:'100px'}}>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/liaojiejianjie.png" alt="img"/>
                          </div>
                          <div className="txt">了解政策</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">首次下单要咨询客服，了解社保政策和缴费标准，选定社保缴纳方案</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/hetongqianding.png" alt="img"/>
                          </div>
                          <div className="txt">淘宝下单</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">一定要备注：参保人姓名、缴费年月，联系电话，身份证号码。</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/anshijiaofei.png" alt="img"/>
                          </div>
                          <div className="txt">按时缴费</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">按时缴纳相关费用至泽智公司指定账户，由泽智人力办理相关社保手续</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/shebaochaxun.png" alt="img"/>
                          </div>
                          <div className="txt">社保查询</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">在每月22日后，拨打12333或支付宝城市服务社保查询，查询自己社保缴纳情况。</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/shoudaohuokuan.png" alt="img"/>
                          </div>
                          <div className="txt">收货付款</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">客户在确认自己社保已正常参保后，在淘宝上确认收货，并给予泽智人力好评。</div>
                        </li>
                     </ul>
                     </div>
                  </Row>:<div/>}
                {downline?
                  <Row>
                    <div className="i4_chose">
                    <ul className="clearfix" style={{listStyle:'none',marginTop:'100px'}}>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/liaojiejianjie.png" alt="img"/>
                          </div>
                          <div className="txt">材料准备</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">提供办理人员身份证正反面复印件一份，查看身份证原件</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/hetongqianding.png" alt="img"/>
                          </div>
                          <div className="txt">合同签订</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">与联智汇通公司签署有关书面资料</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/anshijiaofei.png" alt="img"/>
                          </div>
                          <div className="txt">按时缴费</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">按时缴纳相关费用至泽智公司指定账户，由泽智人力办理相关社保手续</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/shebaochaxun.png" alt="img"/>
                          </div>
                          <div className="txt">社保查询</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">在每月22日后，拨打12333或支付宝城市服务社保查询，查询自己社保缴纳情况。</div>
                        </li>
                        <li>
                          <div className="img">
                            <Image src="/assets/img/shoudaohuokuan.png" alt="img"/>
                          </div>
                          <div className="txt">其他服务</div>
                          <div className="tail-string"><div className="crile"></div></div>
                          <div className="num">停保或其他延伸服务办理请联系泽智人力客服解决。</div>
                        </li>
                     </ul>
                     </div>
                  </Row>:<div/>}
             </Grid>
            </div>
            <div style={{paddingTop:10,paddingBottom:60}} className="whyChoose">
              <Grid>
                 <Row>
                    <PageHeader>
                      <h6 className="text-muted text-center">您可以放心选择我们的原因
                      </h6>
                      <h4 className="text-muted text-center text-success">OUR ADVANTAGE
                      </h4>
                    </PageHeader>
                 </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img  src="/assets/img/xianfuwuhoushoufei.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading style={{fontSize:'17px'}}>先办理后收费服务</Media.Heading>
                      <small>客户拍下订单后，泽智开始办理社保申报，每月22号客户登录社保局官方系统查询到缴费状态为正常缴费后，确认收货。在此之前客户的资金在淘宝平台，我们没有收取任何费用。</small>
                    </Media.Body>
                    </Media>
                  </Col>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img  src="/assets/img/anquanwuyou.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                      <Media.Heading style={{fontSize:'17px'}}>“安全无忧”服务</Media.Heading>
                      <small>为保障所有客户的安全利益，我公司承诺我们在淘宝上办理的所有业务符合淘宝平台相关规定。泽智非常珍惜公司的声誉，绝不办理社保局和公积金管理中心规定的任何违规业务。</small>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img src="/assets/img/youandmeonline.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading style={{fontSize:'17px'}}>你在线我在线服务</Media.Heading>
                        <small>每周7*15小时，每天7:30-22:30泽智人力淘宝客服在线，以及400电话免费咨询服务（400-628-6189）。</small>
                      </Media.Body>
                    </Media>
                  </Col>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img  src="/assets/img/facetoface.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading style={{fontSize:'17px'}}>“面对面”服务</Media.Heading>
                        <small>每周一至周五9:00-17:00的任何时间内，支持客户来泽智人力进行面对面的咨询服务。</small>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img src="/assets/img/servicePromise.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading style={{fontSize:'17px'}}>客户证件保障服务</Media.Heading>
                        <small>在部分业务需要客户的身份证等重要证件原件时，支持顾客本人携带证件同泽智工作人员同时在场办理，全程重要证件在客户手里，确保证件安全。</small>
                      </Media.Body>
                    </Media>
                  </Col>
                  <Col xs={12} md={6}>
                    <Media>
                     <Media.Left>
                        <img src="/assets/img/backMoney.png" alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading style={{fontSize:'17px'}}>无理由退款服务</Media.Heading>
                        <small>客户所拍订单，在社保没有申报进去前，顾客选择协商一致退款，泽智人力会将社保费及服务费全额退还给客户，无需理由。</small>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
               </Grid>
            </div>
        </div>
      );
    }
});

module.exports =  SocialSecurity;


