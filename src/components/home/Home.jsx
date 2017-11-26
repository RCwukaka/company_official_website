import React from 'react';
import HeadBanner from '../headBanner/HeadBanner';
import PrimaryBusiness from '../primaryBusiness/PrimaryBusiness';
import TeamIntroduction from '../teamIntroduction/TeamIntroduction';
import HomeManufacturing from '../homeManufacturing/HomeManufacturing';

const Home = React.createClass({
    render() {
        return (
          <div>
            <HeadBanner/>
            <PrimaryBusiness/>
            <HomeManufacturing/>
            <TeamIntroduction/>
          </div>
        );
    }
});

module.exports =  Home;


