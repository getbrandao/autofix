import React from 'react';

export default props => (
  <div className={`box box-${props.color}`}>
    <div className="box-header with-border">
      <h3 className="box-title"><strong>{props.title}</strong></h3>
      <div className="box-tools pull-right">
        <span className={`label label-${props.labelColor}`}>{props.alert}</span>
      </div>
    </div>
    <div className="box-body">
        {props.children}
    </div>
  </div>
);