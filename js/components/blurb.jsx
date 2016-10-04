import React from 'react';

export default ({title, body, img}) => (
  <div className="blurb">
    <h4>{title}</h4>
    <img src={"./public/img/" + img}/>
    <p>{body}</p>
  </div>
);
