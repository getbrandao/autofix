import React from 'react';
import Grid from '../layout/grid';

export default (props) => (
  <Grid cols={props.cols}>
    <div className="info-box" >
      <span className={`info-box-icon bg-${props.color}`}>
        <i className={`fa fa-${props.icon}`} />
      </span>
      <div className="info-box-content">
        <span className="info-box-text">{props.text}</span>
        <span className="info-box-number">{props.value}</span>
        <div className="progress">
        </div>
        <span className="progress-description text-right">
          <em className="light-gray"> 
            {props.lastupdates}
          </em>
        </span>
      </div>
    </div>
  </Grid>
);

