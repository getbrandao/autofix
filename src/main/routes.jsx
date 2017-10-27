import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Sidebar from '../common/template/sidebar';
import Dashboard from '../dashboard/dashboard';
import Payments from '../payments/payments';

const supportsHistory = 'pushState' in window.history;

export default props => (
  <Router forceRefresh={!supportsHistory}>
    <div>
      <Sidebar />
      {/* <Route path="/" exact component={Dashboard} /> */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/payments" component={Payments} />
      <Redirect from="/" to="/dashboard" />
      {/* <Route component={NoMatch} /> */}
    </div>
  </Router>
);