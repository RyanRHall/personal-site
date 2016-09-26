import React from 'react';
import Links from './links';
import About from './about';
import Portfolio from './portfolio';
require('./css/_master');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      about: true,
      portforlio: false
    };
    this._toggleTab = this._toggleTab.bind(this);
  }

  _toggleTab(tabName){
    return () => {
      this.setState({
        about: false,
        portfolio: false,
        [tabName]: true
      });
    };
  }

  _activeTab(){
    return this.state.about ? <About /> : <Portfolio />;
  }

  render(){
    return(
      <main>
        <Links activeTab={this.state} toggleTab={this._toggleTab} />
        {this._activeTab()}
      </main>
    );
  }
}

export default App;
