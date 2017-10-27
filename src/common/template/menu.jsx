import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default (props) => (
  <ul className="sidebar-menu" data-widget="tree">
    <MenuItem path="/dashboard" label="Dashboard" icon="dashboard" id="dashboard" />
    <MenuTree label="Financeiro" icon="money">
      <MenuItem path="/payments" label="Pagamentos" icon="usd" id="payments" />
    </MenuTree>
  </ul>
);
