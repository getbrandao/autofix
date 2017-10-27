import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTab } from './tabActions';

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected == this.props.target;
    return (
      <li className={`tab-pane ${selected ? 'active' : ''}`}>
        <a href="javascript:;" data-toggle="tab" data-target={this.props.target} onClick={() => this.props.selectTab(this.props.target)}>
          <i className={`fa fa-${this.props.icon}`} /> <span>{this.props.label}</span>
        </a>
      </li>)
    ;
  }
}

const mapStateToProps = (state) => {
  return {tab: state.tab}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);