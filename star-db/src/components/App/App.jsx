import React, {Component} from 'react'
import SwapiService from '../../services/SwapiService'

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'

import './App.css'

export default class App extends Component{
  render() {
    return(
      <main className='app container'>
        <Header />
        <RandomPlanet />
        <div className="app__content-area">
          <ItemList />
          <PersonDetails />
        </div>
      </main>
    )

  }
}

// const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//   people.forEach((person) => {
//     console.log(person)
//   });
// });
// swapi.getAllPlanets().then((people) => {
//   people.forEach((person) => {
//     console.log(person)
//   });
// });
// swapi.getPerson(2).then((person) => {
//   console.log(person.name)
// });
