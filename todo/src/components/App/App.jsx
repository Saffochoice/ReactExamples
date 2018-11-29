import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import FilterPanel from '../FilterPanel/FilterPanel';

const App = () => {

  const wrapperStyles = {
    padding: '40px'
  }
  const todoData = [
    {label: 'Tick two', important: false, id: 1},
    {label: 'Tick one', important: false, id: 2},
    {label: 'Make lock', important: true, id: 3},

  ]

  return (
    <div style={wrapperStyles}>
      <AppHeader />
      <FilterPanel />
      <TodoList todos={todoData}/>
    </div>
  );
};

export default App;
