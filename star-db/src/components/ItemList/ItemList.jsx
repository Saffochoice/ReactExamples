import React, {Component} from 'react'

import SwapiService from '../../services/SwapiService'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

import './ItemList.css'

export default class ItemList extends Component{
  state = {
    navState: 'People',
    navItems: [],
    loading: true,
    error: false,
    activeItemId: null
  }

  constructor(){
    super();
    this.getItems(this.state.navState);
  }

  SwapiService = new SwapiService();

  getItems = (navState) => {
    this.SwapiService
      [`getAll${navState}`]()
      .then(this.itemsLoaded)
      .catch(this.onError)
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  itemsLoaded = (items) => {
    console.log('_____-IRT',items)
    //const navItemsNew = items.map((item) => {name: item.name, id: item.id});
    this.setState({
      navItems: items,
      loading: false
    })
    console.log(this.state.navItems, items)
  }

  clickItem = (id) => {
    this.setState({
      activeItemId: id
    });
  }

  render() {
    const { loading, error } = this.state;
    const errorMsg = error ? <ErrorMsg err={error}/> : null

    let navItems;
    if(!loading && !error){
      navItems = this.state.navItems.map((item) => {
        const classNames = item.id === this.state.activeItemId ? 'list-group-item active' : 'list-group-item'
        return(
        <li key={item.id} className={classNames} onClick={() => this.clickItem(item.id)}>{item.name}</li>
        )
      });
    }
    return (
      <ul className='item-list list-group'>

        {navItems ? navItems : null}
        {errorMsg}
      </ul>
    )
  }
}
