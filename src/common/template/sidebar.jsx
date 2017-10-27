import React from 'react';
import Menu from './menu';
import User from './user';
import Search from './search';

export default (props) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <User userimage={require('../../images/user.png')} username="Gustavo Brandão" />
      <Search />
      <li className="header">OPERACIONAL</li>
      <Menu />
    </section>
  </aside>
);
