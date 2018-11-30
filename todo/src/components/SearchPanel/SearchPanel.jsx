import React, {Component} from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {

  onSearchChange = (e) => {
    this.props.setSearchStr(e.target.value);
  }
  render(){
    return (
      <input
        onChange={this.onSearchChange}
        placeholder={'search'}
        type="text"
        className='form-control search-panel'
        value={this.props.searchStr}

        />
    )
  }

};
