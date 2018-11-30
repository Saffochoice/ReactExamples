import React from 'react';

import FilterBtnGroup from '../FilterBtnGroup/FilterBtnGroup'
import SearchPanel from '../SearchPanel/SearchPanel'

import './FilterPanel.css'

const FilterPanel = (props) => {
  return (
    <div className='filter-panel d-flex'>
      <SearchPanel
        setSearchStr={props.setSearchStr}
        searchStr = {props.searchStr}
        />
      <FilterBtnGroup setFilterState={props.setFilterState} filterState={props.filterState}/>
    </div>

  )
};

export default FilterPanel;
