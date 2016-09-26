import React from 'react';

class Links extends React.Component {
  render(){
    return(
      <div id="links-container">
        <div id="photo"><div></div></div>
        
        <div onClick={this.props.toggleTab('about')}>About</div>
        <div onClick={this.props.toggleTab('portfolio')}>Portfolio</div>
      </div>
    );
  }
}

export default Links;
