import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'
class Pokedex extends Component {
  render () {
    return (
      <div className='pokedex' >
        <h5>Team : {this.props.name} Score : {this.props.score}</h5>
        <h3 className={this.props.winner}>{this.props.winner}</h3>
        <Pokecard style={{ marginTop: '5px', marginBottom: '5px' }} teamOne={this.props.teamOne} />
      </div>
    )
  }
}

export default Pokedex
