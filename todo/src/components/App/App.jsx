import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import FilterPanel from '../FilterPanel/FilterPanel';
import CreatePanel from '../CreatePanel/CreatePanel';

import './App.css'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createItem('Lox'),
      this.createItem('Ppol'),
      this.createItem('lasks')
    ],
    filterState: 'all',
    searchStr: ''
  }



  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0,idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      }
    })
  }

  setFilterState = (name) =>{
    this.setState({
      filterState: name
    })
  }

  createItem(label) {
    return {label: label, important: false, done: false, id: this.maxId++}
  }

  addItem = (text) => {
    if(!text){
      return
    }
    this.setState(({ todoData }) => {
      const newElement = this.createItem(text);
      const newArray = [...todoData, newElement];
      return {
        todoData: newArray
      }
    })
  }

  toggleProp(arr, id, propName){
    // 1. update object
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];

    const newItem = { ...oldItem, [propName]: !oldItem[propName]}

    // 2. build new array
    const newArray = [
      ...arr.slice(0,idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
    return newArray
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(this.state.todoData, id, 'done')
      }
    })
    console.log('toggleDone', id);
  }
  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(this.state.todoData, id, 'important')
      }
    })
    console.log('toggleImportant', id);
  }

  btnFilter = (arr, filterStr) => {
    let newArr = [];
    if(filterStr === 'active'){
      newArr = arr.filter((el) => !el.done)
    } else if(filterStr === 'done'){
      newArr = arr.filter((el) => el.done)
    } else if(filterStr === 'important'){
      newArr = arr.filter((el) => el.important)
    } else {
      newArr = arr
    }
    return newArr
  }

  searchFilter = (arr, str) => {
    if(str.length === 0){
      return arr
    }
    return arr.filter((el)=>{
      return el.label.toLowerCase().includes(str.toLowerCase())
    });
  }
  setSearchStr = (str) => {
    this.setState({
      searchStr: str
    })
  }


  render() {
    const visibleTodos = this.searchFilter(this.state.todoData, this.state.searchStr)

    const filteredTodos = this.btnFilter(visibleTodos, this.state.filterState);

    const done = this.state.todoData.filter((el) => el.done).length
    const toDo = this.state.todoData.filter((el) => !el.done).length
    const importants = this.state.todoData.filter((el) => el.important).length


    return (
      <div className='app'>

        <AppHeader toDo={toDo} done={done} importants={importants}/>
        <FilterPanel
          setFilterState={this.setFilterState}
          filterState={this.state.filterState}
          setSearchStr={this.setSearchStr}
          searchStr={this.state.searchStr}
        />
        <TodoList
          todos={filteredTodos}
          onDelete={this.deleteItem}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}/>
        <CreatePanel addItem={this.addItem}/>
      </div>
    );
  }
};
