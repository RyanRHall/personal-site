import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import AppRouter from './components/router';

{/* <Provider store={Store}>
</Provider> */}

const Root = () => (
    <AppRouter/>
);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  ReactDOM.render(<Root />, container);
});
