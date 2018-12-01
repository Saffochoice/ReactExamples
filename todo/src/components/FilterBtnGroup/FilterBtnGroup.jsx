import React, { Component } from 'react';

export default class FilterBtnGroup extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'important', label: 'Important'},
    {name: 'done', label: 'Done'},
  ]


  render() {
    const { setFilterState } = this.props
    const buttons = this.buttons.map(({name, label}) => {
      return (
        <button
          type="button"
          key={name}
          className={this.props.filterState === name ? 'btn btn-danger' : 'btn btn-outline-secondary'}
          onClick={() => setFilterState(name)}
        >{label}</button>
      )
    })

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {buttons}
      </div>
    )
  }
}
