import React from 'react';

import './AppHeader.css'

const AppHeader = ({ toDo = 0, done = 0 }) => {
  return (
    <header className='app-header d-flex'>
      <h1>Tasks</h1>
      <h2>{toDo} active tasks, {done} done</h2>
    </header>
  )
};

export default AppHeader;
