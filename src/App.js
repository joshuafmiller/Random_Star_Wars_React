import logo from './logo.svg';
import './App.css';
import React from 'react';

class StarWars extends React.Component {

    constructor() {
      super()
      this.state = {
        charName : null,
        height : null,
        homeworld : null,
        species : null,
        image : null,
        visible : false,
      }
    }

  getCharacter(){
    console.log("The button works!")
    const num = Math.ceil(Math.random()*87)
    const starWarsUrl = `https://akabab.github.io/starwars-api/api/id/${num}.json`
    fetch(starWarsUrl)
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        this.setState({
          charName : data.name,
          height : data.height,
          homeWorld : data.homeworld,
          species : data.species,
          image : data.image,
          visible : true,
        })
      })
    

  }



  render() {
    return (
      <div className="starWars">
        {
          this.state.visible &&
          <div className="characterInformation">
            <img src={this.state.image} className="image"></img>
            <h1 className="name">{this.state.charName}</h1>
            <p className="height">Height: {this.state.height}</p>
            <p className="home">Homeworld: {this.state.homeWorld}</p>
            <p className="species">Species: {this.state.species}</p>       
          </div>
        }
        <button
        type="button"
        className="randomizeButton"
        onClick={() => this.getCharacter()}
        >
          Randomize Character
        </button>
      </div>
    )
  }

}

function App() {
  return (
    <StarWars />
  );
}

export default App;
