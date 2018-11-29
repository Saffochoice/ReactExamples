import React from 'react';

import './TodoList.css'

import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = ({ todos }) => {

  var els = todos.map(item => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item todo-list-item'>
        <TodoListItem { ...itemProps }/>
      </li>
    );
  });

  return (
    <ul className='list-group todo-list'>
      {els}
    </ul>
  );
};
export default TodoList;
