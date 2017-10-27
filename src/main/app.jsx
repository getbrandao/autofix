import React from 'react';
import '../common/dependencies/dependencies';

import Header from '../common/template/header';
import Footer from '../common/template/footer';

import Routes from './routes';

export default (props) => (
  <div className="wrapper">
    <Header />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);
