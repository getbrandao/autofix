import React from 'react';

export default (props) => (
  <div className="user-panel">
    <div className="pull-left image">
      <img src={props.userimage} className="img-circle" alt={props.username} />
    </div>
    <div className="pull-left info">
      <p>{props.username}</p>
      <a href="javascript:;">
        <i className="fa fa-circle text-success" /> Online
      </a>
    </div>
  </div>
);
