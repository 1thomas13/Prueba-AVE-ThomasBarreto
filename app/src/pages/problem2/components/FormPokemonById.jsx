import React from 'react'
import { useState } from 'react'
import { searchPokemonById } from '../services'

export const FormPokemonById = () => {
  const [ id, setId ] = useState('')
  const [ pokemon, setPokemon ] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pokemon = await searchPokemonById(id)
    setPokemon(pokemon)
  }

  return (
    <form>
      <label> Buscar pokemon por id para obtener sus estadísticas</label>
      <input onChange={ (e) => { setId(e.target.value) }} value={ id } type={'number'} placeholder={'Ingrese un id'}/>
      <button onClick={ handleSubmit } type={'submit'}>Buscar</button>
      { pokemon.length !== 0 && pokemon.name ? <h4>
        El pokemon es:  { pokemon.name } <br/>Estadísticas: {pokemon.stats?.map(stat=> (<div key={ stat.stat.name }>
          Nombre: <span style={{color: '#30c7f5'}}> { stat.stat.name } </span> 
          Base: <span style={{color: '#30c7f5'}}> { stat.base_stat } </span>  
          Esfuerzo: <span style={{color: '#30c7f5'}}> { stat.effort }</span> 
        </div>))}</h4>
        : pokemon
      }
  </form>

  )
}
