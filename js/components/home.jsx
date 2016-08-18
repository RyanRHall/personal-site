import React from 'react';
import { Link } from 'react-router';

const PATH = "./public/img";
const IMG_NAMES = ["portfolio", "about", "resume"];

const Home = () => {
  const imageTags = IMG_NAMES.map( name => (
    <Link to={name}>
      <img src={`${PATH}/${name}.jpg`} key={name}/>
    </Link>
  ));

  return(
    <div>
      {imageTags}
    </div>
  );
};

export default Home;
