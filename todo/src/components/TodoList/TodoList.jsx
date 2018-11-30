import React from 'react';

import './TodoList.css'

import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = ({ todos, onDelete, toggleDone, toggleImportant }) => {

  var els = todos.map(item => {

    const { id, ...itemProps } = item;

    return (
      <TodoListItem { ...itemProps }
        key={id}
        onDelete={() => onDelete(id)}
        toggleDone={() => toggleDone(id)}
        toggleImportant={() => toggleImportant(id)}/>
    );
  });

  return (
    <ul className='list-group todo-list'>
      {els}
    </ul>
  );
};
export default TodoList;
