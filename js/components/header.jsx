import React from 'react';
import { Link } from 'react-router';
require("./css/header");


const TABS = {
  ["/"]: "Home",
  about: "About",
  portfolio: "Portfolio",
  resume: "Resume",
};

export default class Header extends React.Component {

  _generateClassName(path){
    return (path === this.props.path) ? "selected" : "";
  }

  _generateLinks(){
    const links = [];
    for (let path in TABS){
      links.push(
        <Link to={path} className={this._generateClassName(path)} key={path} >
          {TABS[path]}
        </Link>
      );
    }
    return links;
  }

  render(){
    return(
      <header>
        {this._generateLinks()}
      </header>
    );
  }
}
