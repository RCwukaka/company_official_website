import React from 'react';
import { Row,Col,Grid,Image } from 'react-bootstrap';

const Footer = React.createClass({
    render() {
        return (
          <div className='navbar-inverse footer'>
           <Grid>
             <Row>
              <Col xs={1} md={1}>
               <small className='text-muted'>合作伙伴</small>
              </Col>
              <Col xs={2} md={2}>
                <ul className="partners-right">
                   <li><Image src="/assets/img/aliyun.jpg"/><span></span></li>
                   <li><Image src="/assets/img/picc.jpg"/><span></span></li>
                   <li><Image src="/assets/img/pingan.jpg"/><span></span></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="partners-right">
                   <li><Image src="/assets/img/chuangke.jpg"/><span></span></li>
                   <li><Image src="/assets/img/pinbot.jpg"/><span></span></li>
                   <li><Image src="/assets/img/upyun.jpg"/><span></span></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="partners-right">
                   <li><Image src="/assets/img/zhilian.jpg"/><span></span></li>
                   <li><Image src="/assets/img/zhipin.jpg"/><span></span></li>
                   <li><Image src="/assets/img/aodianyun.jpg"/><span></span></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="partners-right">
                   <li><Image src="/assets/img/maike.jpg"/><span></span><span></span></li>
                   <li><Image src="/assets/img/qigongbao.jpg"/><span></span></li>
                   <li><Image src="/assets/img/chuanghu.jpg"/><span></span></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="partners-right">
                   <li><Image src="/assets/img/yidianzu.jpg"/><span></span></li>
                   <li><Image src="/assets/img/ayibang.png"/><span></span></li>
                   <li><Image src="/assets/img/linhuiba.png"/><span></span></li>
                 </ul>
              </Col>
            </Row>
            <Row>
              <Col xs={1} md={1}>
               <small className='text-muted'>友情链接</small>
              </Col>
              <Col xs={2} md={2}>
                <ul className="list-unstyled">
                   <li><a href="http://www.cnlist.org/">黄页B2B</a></li>
                   <li><a href="https://www.xxjr.com/">小额贷款</a></li>
                   <li><a href="http://www.gbicom.cn/">中国商标网</a></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="list-unstyled">
                   <li><a href="http://task.zbj.com/">服务众包需求</a></li>
                   <li><a href="http://www.wenzhen8.com/">医药招商</a></li>
                   <li><a href="http://www.qianxibj.net/">北京搬家平台</a></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="list-unstyled">
                   <li><a href="http://www.rrkd.cn/">人人快送</a></li>
                   <li><a href="http://waww.tex68.com/">品牌家纺加盟</a></li>
                   <li><a href="https://www.reocar.com/">租车</a></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="list-unstyled">
                   <li><a href="http://www.chuzong.com/">厨总网</a></li>
                   <li><a href="http://fuwu.huangye88.com/">商务服务网</a></li>
                   <li><a href="http://hangzhou.fangtoo.com/">房途二手房</a></li>
                 </ul>
              </Col>
              <Col xs={2} md={2}>
                <ul className="list-unstyled">
                   <li><a href="https://www.joyowo.com/renshizixun/">人力资源外包</a></li>
                   <li><a href="http://www.ujiuye.com/">IT培训班</a></li>
                   <li><a href="http://cs.zbj.com/">开办公司</a></li>
                 </ul>
              </Col>
            </Row>
            <Row>
              <div className="text-center text-muted">
               <small>联系我们 ： 0571-888888</small>
               </div>
            </Row>
            <Row>
              <div className="text-center text-muted">
               <small>地址 ： 杭州国脉科技园</small>
               </div>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                 <div className="text-center text-muted">
                   <small>© 2013-2015 杭州今叮网络有限公司版权所有 | 工信部备案：京ICP备1234252号-1</small>
                 </div>
              </Col>
            </Row>
           </Grid>
           </div>
        );
    }
});

module.exports = Footer;

