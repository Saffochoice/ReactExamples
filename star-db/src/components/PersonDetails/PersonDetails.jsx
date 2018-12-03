import React, {Component} from 'react'

import SwapiService from '../../services/SwapiService'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

import './PersonDetails.css'

export default class PersonDetails extends Component{
  state = {
    itemType: 'Person',
    itemId: 2,
    error: false,
    loading: false,
    itemObj: null
  }

  SwapiService = new SwapiService();

  constructor(){
    super();
    const {itemId,itemType} = this.state;

    this.getItem(itemId,itemType);
  }
  getItem = (id, itemType) => {
    this.SwapiService
      [`get${itemType}`](id)
      .then(this.itemLoaded)
      .catch(this.onError)
  }
  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  itemLoaded = (item) => {
    //console.log('_____-IRT',item)
    //const navItemsNew = items.map((item) => {name: item.name, id: item.id});
    this.setState({
      itemObj: item,
      loading: false
    })
    console.log(this.state.navItems, item)
  }
  render() {
    let itemObj;
    let content;
    if(this.state.itemObj && !this.state.loading){
      itemObj = this.state.itemObj;
      content = (
        <div className='person-details'>
          <h2>{itemObj.name}</h2>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span>Eye color - </span>
              <span>{itemObj.eye_color}</span>
            </li>
            <li className='list-group-item'>
              <span>Mass</span>
              <span>{itemObj.mass}</span>
            </li>
            <li className='list-group-item'>
              <span>Birth year</span>
              <span>{itemObj.birth_year}</span>
            </li>

          </ul>
        </div>
      );
    } else {
      content = null;
    }
    //const itemObj = this.state.itemObj && !this.stateloading ? this.state.itemObj : null;
    return (
      <div className='person-details'>

      </div>
      {content}

    )
  }
}

const itemView = ({ item }) => {
  //const { name, population, rotationSpeed, diameter, id} = planet;
  return (
    <React.Fragment>
      <h2>{itemObj.name}</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span>Eye color - </span>
          <span>{itemObj.eye_color}</span>
        </li>
        <li className='list-group-item'>
          <span>Mass</span>
          <span>{itemObj.mass}</span>
        </li>
        <li className='list-group-item'>
          <span>Birth year</span>
          <span>{itemObj.birth_year}</span>
        </li>

      </ul>
    </React.Fragment>

  )
}
