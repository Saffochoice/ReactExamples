import React, { Component } from 'react';

export default class FilterBtnGroup extends Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger">All</button>
        <button type="button" className="btn btn-outline-secondary">Active</button>
        <button type="button" className="btn btn-outline-secondary">Done</button>
      </div>
    )
  }
}
