import React, { Component } from 'react';
import './CreatePanel.css'

export default class CreatePanel extends Component {

  state = {
    inputValue: ''
  }

  saveInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  formSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {

    return (
      <form className="create-panel" onSubmit={this.formSubmit}>
        <input
          type="text"
          className='form-control'
          onChange={this.saveInputValue}
          value={this.state.inputValue}
          placeholder='Type name of the new Task'
          />
        <button type='submit'
          className='btn btn-outline-success'><i
          className='fa fa-plus'></i></button>
      </form>
    )
  }
}
