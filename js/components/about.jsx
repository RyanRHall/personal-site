import React from 'react';
import Blurb from './blurb';

const blurbs_json = [];

var req = require.context("./about_info", true, /.json$/);
req.keys().forEach(function(key){
    blurbs_json.push(req(key));
});

const _generateBlurbs = () => {
  return blurbs_json.map( json => (
    <Blurb title={json.title} body={json.body} img={json.img} key={json.title}/>
  ));
};

export default () => (
  <div className="tab-container">
    { _generateBlurbs() }
  </div>
);
