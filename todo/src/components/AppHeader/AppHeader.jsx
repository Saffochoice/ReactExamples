import React from 'react';

import './AppHeader.css'

const AppHeader = ({ toDo = 0, done = 0, importants = 0 }) => {
  return (
    <header className='app-header d-flex'>
      <h1>Tasks</h1>
      <h2>{toDo} active tasks, {done} done, {importants} important</h2>
    </header>
  )
};

export default AppHeader;
