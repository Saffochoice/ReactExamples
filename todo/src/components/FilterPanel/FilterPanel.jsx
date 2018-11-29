import React from 'react';

import FilterBtnGroup from '../FilterBtnGroup/FilterBtnGroup'
import SearchPanel from '../SearchPanel/SearchPanel'

import './FilterPanel.css'

const FilterPanel = () => {
  return (
    <div className='filter-panel d-flex'>
      <SearchPanel />
      <FilterBtnGroup />
    </div>

  )
};

export default FilterPanel;
