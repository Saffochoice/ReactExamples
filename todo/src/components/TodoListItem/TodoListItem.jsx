import React, {Component} from 'react';

import './TodoListItem.css'


export default class TodoListItem extends Component {


  render() {
    const { label, important = false } = this.props; // деструктуризация

    const impClass = {
      fontWeight: '800',
      color: 'tomato',
      fontSize: '20px'
    };
    return (
      <div className={important ? 'todo-list-item important' : 'todo-list-item'}>
        <span>{ label }</span>
        <div className='buttons'>
          <button type='button' className='btn btn-outline-success'><i className='fa fa-exclamation'></i></button>
          <button type='button' className='btn btn-outline-danger'><i className='fa fa-trash'></i></button>
        </div>

      </div>
    );
  }
}
