import React, {Component} from 'react';

import './TodoListItem.css'


export default class TodoListItem extends Component {

  render() {
    const { label, onDelete, toggleDone, toggleImportant, important, done } = this.props; // деструктуризация


    let classNames = 'todo-list-item list-group-item';
    done ? classNames += ' done' : classNames += '';
    important ? classNames += ' important' : classNames += '';


    return (
      <li className={classNames}>
        <span onClick={toggleDone}>{ label }</span>
        <div className='buttons'>
          <button type='button'
            className='btn btn-outline-warning'
            onClick={toggleImportant}><i
            className='fa fa-exclamation'></i></button>
          <button type='button'
            className='btn btn-outline-danger'
            onClick={onDelete}><i
            className='fa fa-trash'></i></button>
        </div>

      </li>
    );
  }
}
