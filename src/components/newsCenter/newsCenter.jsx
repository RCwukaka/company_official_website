import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Panel,Pager} from 'react-bootstrap';


const NewsCenter = React.createClass({
    render() {
        return (
          <div>
          <Image src="assets/img/team.png" style={{width:'100%'}}></Image>
            <Grid>
               <Row>
                  <PageHeader><small>公司动态</small></PageHeader>
               </Row>
               <Row>
                  <Panel>
                    新闻一
                  </Panel>
               </Row>
               <Row>
                  <Panel>
                    新闻二
                  </Panel>
               </Row>
               <Row>
                  <Panel>
                    新闻三
                  </Panel>
               </Row>
               <Row>
                  <Panel>
                    新闻四 
                  </Panel>
               </Row>
               <Row>
                  <Panel>
                    新闻五 
                  </Panel>
               </Row>
               <Row>
                  <Pager>
                    <Pager.Item href="#">下一页</Pager.Item>
                    {' '}
                    <Pager.Item href="#">上一页</Pager.Item>
                  </Pager>
               </Row>
            </Grid>
          </div>
        );
    }
});

module.exports =  NewsCenter;


