import React from 'react';

export default props => (
  <form action="#" method="get" className="sidebar-form">
    <div className="input-group">
      <input type="text" name="q" className="form-control" placeholder="Pesquisar..." />
      <span className="input-group-btn">
        <button type="submit" name="search" id="search-btn" className="btn btn-flat">
          <i className="fa fa-search" />
        </button>
      </span>
    </div>
  </form>
);
