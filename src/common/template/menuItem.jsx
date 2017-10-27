import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Link } from 'react-router-dom';

import { selectMenu } from './menuActions';


class MenuItem extends Component {
  render() {
    const selected = this.props.menu.selected == this.props.id;
    return (
      <li className={selected ? "active" : ""} id={this.props.id}  onClick={() => this.props.selectMenu(this.props.id)}>
        <Link to={this.props.path}>
          <i className={`fa fa-${this.props.icon}`} /> <span>{this.props.label}</span>
        </Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {menu: state.menu}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
