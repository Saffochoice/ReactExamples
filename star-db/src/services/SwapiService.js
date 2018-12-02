
export default class SwapiService {

  _apiBase = 'https://swapi.co/api'

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok){
      throw new Error(`Could not fetch this url - ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  // people
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  // planets
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet)
  }

  // starships
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }
  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }

  _extractId(item) {
    const regExp = /\/([0-9]*)\/$/;
    return item.url.match(regExp)[1];
  }
  _transformPlanet(planet) {

    const id = this._extractId(planet);
    return {
      id: id,
      name: planet.name,
      population: planet.population,
      rotationSpeed: planet.rotation_period,
      diameter: planet.diameter,
    }
  }
}





// getResource('https://swapi.co/api/people/12323/')
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.error('Could not fetch!!!',err);
//   });

/* эквивалент
console.log(body)
fetch('https://swapi.co/api/people/1/')
  .then((res) => {
    //console.log('Got res', res);
    return res.json();
  })
  .then((body) => {
    console.log(body)
  }) */
