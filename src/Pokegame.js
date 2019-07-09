import React, { Component } from 'react'
import './Pokegame.css'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  state = {
    pokemons : [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ],
   teamOne:[],
   teamTwo: [],
   teamOneScore: null,
   teamTwoScore: null,

  }
  
  getTeamOne = ()=>{
      
    let teamOneArray = []
    for(let i=0 ; i < 4 ; i++){
      const randomPokemon = this.state.pokemons[Math.floor(Math.random() * this.state.pokemons.length)]
      teamOneArray.push(randomPokemon)
    }
    
    this.setState({
      teamOne: [...teamOneArray],
    }, ()=>{

    let TeamOneSum = this.state.teamOne.reduce((prev, cur) => {
      return prev + cur.base_experience;
    }, 0);
    this.setState({
      teamOneScore: TeamOneSum
    })
    })
  }

  getTeamTwo = ()=>{
      
    let teamTwoArray = []
    for(let i=0 ; i < 4 ; i++){
      const randomPokemon = this.state.pokemons[Math.floor(Math.random() * this.state.pokemons.length)]
      teamTwoArray.push(randomPokemon)
    }
    
    this.setState({
      teamTwo: [...teamTwoArray],
    }, ()=>{

    let TeamTwoSum = this.state.teamTwo.reduce((prev, cur) => {
      return prev + cur.base_experience;
    }, 0);
    this.setState({
      teamTwoScore: TeamTwoSum
    })
    })

    

  }

  componentDidMount() {
   this.getTeamOne()
   this.getTeamTwo()
  }

  render () {
    return (
      <div>
        
        <Pokedex teamOne={this.state.teamOne}  name= "One" score={this.state.teamOneScore} winner={ this.state.teamOneScore > this.state.teamTwoScore ? 'Winner' : 'Loser' }/>
        <Pokedex teamOne={this.state.teamTwo} name="Two" score={this.state.teamTwoScore} winner={ this.state.teamTwoScore > this.state.teamOneScore ? 'Winner' : 'Loser' }/>
      </div>
    )
  }
}

export default Pokegame
