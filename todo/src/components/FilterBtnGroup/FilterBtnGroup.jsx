import React, { Component } from 'react';

export default class FilterBtnGroup extends Component {

  // constructor() {
  //   super(props);
  //
  // }
  render() {
    const { setFilterState } = this.props
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button"
          className={this.props.filterState === 'all' ? 'btn btn-danger' : 'btn btn-outline-secondary'}
          onClick={() => setFilterState('all')}
        >All</button>
        <button type="button"
          className={this.props.filterState === 'active' ? 'btn btn-danger' : 'btn btn-outline-secondary'}
          onClick={() => setFilterState('active')}
        >Active</button>
        <button type="button"
          className={this.props.filterState === 'done' ? 'btn btn-danger' : 'btn btn-outline-secondary'}
          onClick={() => setFilterState('done')}
        >Done</button>
        <button type="button"
          className={this.props.filterState === 'important' ? 'btn btn-danger' : 'btn btn-outline-secondary'}
          onClick={() => setFilterState('important')}
        >Important</button>
      </div>
    )
  }
}
