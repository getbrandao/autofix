import React from 'react';

export default props => (
  <div className="table-responsive">
    <table className="table table-hover">
      {props.children}
    </table>
  </div>
);