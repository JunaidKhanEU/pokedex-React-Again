import React, { Component } from 'react'
import './Pokecard.css'

const renderPokecard = (props) => {
  return props.teamOne.map((el, i) => {
    return (
      <div className='card' style={{ width: '18rem', marginTop: '4px' }} key={i}>
        <h5 className='card-title pokecard-title'>{el.name}</h5>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${el.id.toString().padStart(3, 0)}.png`} className='card-img-top' alt='...' />
        <div className='card-body'>

          <p className='card-text pokecard-text'>Type : {el.type}</p>
          <p className='card-text pokecard-text'>EXP : {el.base_experience}</p>
        </div>
      </div>
    )
  })
}
class Pokecard extends Component {
  render () {
    return (
      <div className='pokecard'>
        { renderPokecard(this.props) }
      </div>
    )
  }
}

export default Pokecard
