import React from 'react';

export default (props) => (
  <header className="main-header">
    <a href="/" className="logo">
      <span className="logo-mini"><b>My</b>M</span>
      <span className="logo-lg">
        <div>
          <span>
            <i className="fa fa-wrench" />
          </span>
          <span>
            Auto<b>FIX</b>
          </span>
        </div>
      </span>
    </a>
    <nav className="navbar nav-static-top">
      <a href="javascript:;" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
    </nav>
  </header>
);

