import React, {Component} from 'react';

import './TodoListItem.css'


export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }
  setImportant = () => {
    this.setState((state) => {
      return {
        important: !this.state.important
      }
    });
  }

  render() {
    const { label } = this.props; // деструктуризация
    const { done, important } = this.state;

    let classNames = 'todo-list-item list-group-item';
    done ? classNames += ' done' : classNames += '';
    important ? classNames += ' important' : classNames += '';


    return (
      <li className={classNames}>
        <span onClick={this.onLabelClick}>{ label }</span>
        <div className='buttons'>
          <button type='button'
            className='btn btn-outline-success'
            onClick={this.setImportant}><i
            className='fa fa-exclamation'></i></button>
          <button type='button'
            className='btn btn-outline-danger'><i
            className='fa fa-trash'></i></button>
        </div>

      </li>
    );
  }
}
