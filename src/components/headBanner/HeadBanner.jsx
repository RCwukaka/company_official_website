import React from 'react';
import { Carousel,Image } from 'react-bootstrap';


const HeadBanner = React.createClass({
    render() {
        return (
          <div className="homeBanner">
            <Carousel>
              <Carousel.Item>
                <Image src="/assets/img/banner_home1.jpg" style={{width:"100%",minHeight:"650px"}}/>
                <Carousel.Caption>
                  <h3 className="lead">十年服务专注企业人力资本服务外包、做企业最有价值的服务外包供应商.</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/assets/img/banner_home2.jpg" style={{width:"100%",minHeight:"650px"}}/>
                <Carousel.Caption>
                  <h3 className="lead">100万雇安保托管服务，为雇主规避风险、提高品牌价值.</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/assets/img/banner_home3.jpg" style={{width:"100%",minHeight:"650px"}}/>
                <Carousel.Caption>
                  <h4 className="lead">帮助企业及个人提供专业的人事外包服务，做客户最有品质的社保代理服务机构.</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        );
    }
});

module.exports =  HeadBanner;

