import React from 'react'
import { FormPokemonByName } from './components/FormPokemonByName'
import { FormPokemonById } from './components/FormPokemonById'
import { FormPokemonsByTypes } from './components/FormPokemosByTypes'
import { FormTotalPokemonByType } from './components/FormTotalPokemonByType'
import { FormPokemonArray } from './components/FormPokemonArray'
import { FormPokemonTypeName } from './components/FormPokemonTypeName'

export const Problem2 = () => {
  const ALL_TYPES = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]

  return (
    <>
     
      <div>
        <h3> Los tipos de pokemon son: </h3>
        <ul style={ listStyle }>
          { ALL_TYPES.map(type => <li style={typeStyle} key={type}> { type } </li> )}
        </ul>
      </div>

      <FormTotalPokemonByType/>
      <FormPokemonsByTypes/>
      <FormPokemonByName/>
      <FormPokemonById/>
      <FormPokemonArray/>
      <FormPokemonTypeName/>

    </>
  )
}

const typeStyle  = {
  background: 'rgb(83, 86, 129)',
  padding: '5px 8px',
  color: 'white',
  margin:'5px ',
  borderRadius: '14px',
  width: 'fit-content'
}

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

