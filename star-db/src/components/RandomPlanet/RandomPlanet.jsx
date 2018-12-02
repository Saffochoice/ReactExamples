import React, {Component} from 'react'

import SwapiService from '../../services/SwapiService'
import Spinner from '../Spinner/Spinner'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

import './RandomPlanet.css'

export default class RandomPlanet extends Component{
  state = {
    planet:  {

    },
    loading: true,
    error: false
  }

  constructor() {
    super();
    this.updatePlanet();
    setInterval(()=>{
      this.updatePlanet();
    }, 3000)
  }

  planetLoaded = (planet) => {
    this.setState({ planet, loading: false });
    this.setState({loading: false})
  }

  SwapiService = new SwapiService();

  updatePlanet() {
    const id = Math.floor(Math.random()*10) + 2;
    //const id = 222

    this.SwapiService
      .getPlanet(id)
      .then(this.planetLoaded)
      .catch(this.onError)
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  render() {

    const { planet, loading, error } = this.state;

    //return
    const preloader = loading ? <Spinner /> : null
    const content = !loading && !error ? <PlanetView planet={planet}/> : null
    const errorMsg = error ? <ErrorMsg err={error}/> : null


    return (
      <div className='random-planet'>
        {preloader}
        {content}
        {errorMsg}

      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationSpeed, diameter, id} = planet;
  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="loading"/>
      <div className="info">
        <h1 className="name">Planet - {name ? name : 'loading...'}</h1>
        <ul className='list-group-flush'>
          <li className="list-group-item">
            <span className="prop-name">Population - </span>
            <span className="value">{population ? population : 'loading...'}</span>
          </li>
          <li className="list-group-item">
            <span className="prop-name">Rotation period - </span>
            <span className="value">{rotationSpeed ? rotationSpeed : 'loading...'}</span>
          </li>
          <li className="list-group-item">
            <span className="prop-name">Diameter - </span>
            <span className="value">{diameter ? diameter : 'loading...'}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>

  )
}
