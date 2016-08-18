import React from 'react';
import Header from './header';

export default ({children, location}) => (
  <main>
    <Header currentPath={location.pathname}/>
    {children}
  </main>
);
