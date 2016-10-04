import React from 'react';
import ExternalLinks from './external_links';

const Links = ({toggleTab}) => (
  <div id="left-pane">
    <div id="photo"><div></div></div>

    <div id="links-container">
      <div className="internal-link" onClick={toggleTab('about')}>About</div>
      <div className="internal-link" onClick={toggleTab('portfolio')}>Portfolio</div>
      <ExternalLinks />
    </div>
  </div>
);

export default Links;
