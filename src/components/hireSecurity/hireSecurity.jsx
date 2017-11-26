import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Pager,Navbar,NavItem,Nav,NavDropdown,Carousel,Table,Panel} from 'react-bootstrap';

const HireSecurity = React.createClass({
    render() {
        return (
          <div>
            <Image src="assets/img/guanbao_header.jpg" style={{width:'100%'}}></Image>
            <div style={{paddingTop:20,backgroundColor: '#f9f9f9',paddingBottom:20}}>
              <Grid>
                 <Row>
                    <PageHeader>
                      <h6 className="lead text-center">雇安保<small>/Safety insurance</small>
                      </h6>
                      <p className="text-muted text-center"><small>员工工伤和意外伤害全面保障计划</small>
                      </p>
                    </PageHeader>
                    <p className="lead text-center"><small>雇安保是杭州联智汇通人力资源开发有限公司与国内知名保险公司合作的产品</small></p>
                 </Row>
                 <Row>
                    <ul className="product">
                      <li><span>适用范围：</span><p>各类合法用人单位；</p></li>
                      <li><span>雇员年龄：</span><p>16-70周岁；</p></li>
                      <li><span>保险期限：</span><p>1月以上；</p></li>
                      <li><span>投保范围：</span><p>中国大陆（除港澳台）</p></li>
                      <li><span>投保方式：</span><p>第三方（山东产联商贸股份有限公司)</p></li>
                      <li><span>保险责任：</span><p>请详细阅读《雇主责任险适用条款》</p></li>
                    </ul>
                 </Row>
                 <Row>
                    <PageHeader>
                      <h6 className="text-muted text-center text-success">雇工宝详细一览表
                      </h6>
                      <p className="text-center"><small>安全、稳定、可信赖</small>
                      </p>
                    </PageHeader>
                 </Row>
                 <Row>
                   <div style={{width:'80%',margin:'auto',marginBottom:"50px"}}>
                     <Table responsive className="product-table">
                       <thead>
                         <tr>
                           <th className="p2b_l" >保障项目</th>
                           <th className="p2b_c">保险金额</th>
                           <th className="p2b_r">保障范围</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                           <td>工伤身故或意外身故</td>
                           <td>80万元</td>
                           <td className="p2b_td">
                             <p>1.依据国家<b>《工伤保险条例》</b>规定的包含职业病在内的工伤情形； </p>
                             <p>2.非工作时间、非工作地点、非工作原因的生活意外伤害；</p>
                           </td>
                         </tr>
                         <tr className="tr1">
                            <td>意外伤害需救治所发生 的医疗费用</td>
                            <td>20万元</td>
                             <td className="p2b_td">
                               <p>（1）挂号费、治疗费、手术费、检查费、医药费、材料费、急救车费； </p>
                               <p>（2）住院期间的床位费、取暖费、空调费。 </p>
                               <p>2.医疗费用在2000元以下的不计免赔，全额报销。2000元以上的根据工伤保险诊疗目录的规定符合要求的全额报销。 </p>
                               <p>3.可报销的医疗费用以20万元为上限，超出部分不予报销。</p>
                             </td>
                         </tr>
                        <tr>
                          <td><p>伤残费用报销</p></td>
                          <td>80万元</td>
                          <td className="p2b_td">
                            <p>1.伤残等级确定依据GB/T16180-2014 <b>《劳动能力鉴定、职工工伤及职业病致残等级》</b>确定。 </p>
                            <p>2.具体赔付额度=80万元*伤残等级对应的相应比例. <b>《伤残等级给付比例表》 </b></p>
                            <p>3.伤残等级的确定机构必须为国家相应资质和认可的劳动能力鉴定委员会或司法鉴定机构。</p>
                          </td>
                        </tr>
                        <tr className="tr2">
                          <td>住院津贴</td><td>60元/天</td>
                          <td rowSpan="2" className="p2b_td">
                            <p>1.住院津贴的计算方式为：60元/天住院津贴×[实际住院天数]（以当地住院床位费为依据，不足60元的按实际费用赔付），最长不超过365天。</p>
                            <p>2.误工费支付按照实际住院天数所得天数计算，100元/天，最长不超过365天。</p>
                          </td>
                        </tr>
                        <tr className="tr2">
                          <td>误工费</td>
                          <td>100元/天</td>
                        </tr>
                        <tr className="tr3">
                          <td colSpan="3" className="p2b_td p2b_td_r">
                            <p>特别提醒： </p>
                            <p>1. 建议企业全员投保，最低投保人数为5人； </p>
                            <p>2. 投保企业须为中华人民共和国境内的企事业单位、个体经济组织或其他组织，尤其不包括：（1）渔民、船员及其他海上作业人员；（2）矿井及钻油井工人；（3）火药爆竹厂工人；（4）爆破工人；（5）杂技演员；（6）高空安装施工等室外高空作业人员。 </p>
                            <p>3. 除外情况：个别企业含少量高空作业员工经保险人确认后可以承保。 </p>
                            <p>隐私保护声明： </p>
                            <p>提供的个人信息、数据和隐私我们不会提供给任何未获授权的第三方。</p>
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                    </div>
                 </Row>
               </Grid>
               <div style={{backgroundColor:'#07996a'}}>
                 <Grid>
                   <Row>
                      <div style={{textAlign:'center'}}>
                        <h6 className="lead text-center" style={{color:'#fff'}}>理赔流程
                        </h6>
                        <Image src="/assets/img/lipeiliucheng.jpg"/>
                        <div style={{height:"20px"}}></div>
                        <div className="arrow-up"></div>
                      </div>
                   </Row>
                 </Grid>
               </div>
               <div style={{backgroundColor:'#fff',paddingTop:"20px",paddingBottom:"20px"}}>
                <Grid>
                   <Row>
                      <Image src="/assets/img/lipeiliucheng2.jpg"/>
                   </Row>
                 </Grid>
                </div>
               <div style={{backgroundColor:'#ffd737'}}>
                 <Grid>
                   <Row>
                      <Col sm={12} md={6}>
                        <div className="arrow"></div>
                        <div style={{marginTop:'100px'}}>
                          <h4 className="text-center lead">
                             理赔范围广，力度大
                          </h4>
                        </div>
                      </Col>
                      <Col sm={12} md={6}>
                        <div  style={{marginTop:'20px',marginBottom:'20px'}}>
                          <p><b> 01 </b>在非工作时间，非工作场所，非工作原因受到意外伤害的</p>
                          <p><b> 02 </b>在工作时间和工作场所内，因工作原因受到事故伤害的。</p>
                          <p><b> 03 </b>因工外出期间，由于工作原因受到伤害或者发生事故下落不明</p>
                          <p><b> 04 </b>在工作时间和工作场所内，因履行工作职责受到暴力等意外伤害的</p>
                          <p><b> 05 </b>从事与工作有关的预备性或者收尾性工作受到事故伤害的。</p>
                          <p><b> 06 </b>在上下班途中，受到非本人主要责任的交通事故的</p>
                          <p><b> 07 </b>在抢险救灾等维护国家利益、公共利益活动中受到伤害的</p>
                          <p><b> 08 </b>职工原在军队服役，因战、因公致残，已取得伤残军人证， 到用人单位后旧伤复发的。</p>
                        </div>
                      </Col>
                   </Row>
                 </Grid>
               </div>
                <Grid>
                 <Row>
                  <div style={{marginTop:'50px'}}>
                    <blockquote>
                      <p>投保知识问答</p>
                    </blockquote>
                  </div>
                 </Row>
                 <Row>
                  <Panel className="product-table">
                    <p>问：医疗费是否有最低免赔额</p>
                    <p>答：无最低免赔额，医疗费总额在2000元以内的100%报销，医疗费总额在2000元以上的按照国家工伤保险相关规定报销。</p>
                  </Panel>
                  <Panel className="product-table">
                    <p>问：发生工伤后需要准备的材料？</p>
                    <p>答：按保险公司所需的材料准备。</p>
                  </Panel>
                  <Panel className="product-table">
                    <p>问：工亡80万的报销标准怎样确定？</p>
                    <p>答：死亡赔偿限额80万。</p>
                  </Panel>
                  <Panel className="product-table">
                    <p>问：员工发生工伤后已经正常报案，这种治疗期的员工是否可以断保？</p>
                    <p>答：不可以。</p>
                  </Panel>
                 </Row>
                </Grid>
            </div>
          </div>
        );
    }
});

module.exports =  HireSecurity;


