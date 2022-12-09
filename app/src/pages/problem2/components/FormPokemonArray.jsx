import React, { useState } from 'react'
import { orderArray } from '../helper'
import { searchArrayPokemons } from '../services'

export const FormPokemonArray = () => {
  const [ pokemonArray, setPokemonArray ] = useState('')
  const [ pokemonsFiltered, setPokemonsFiltered ] = useState([])
  const [ filter, setFilter ] = useState('')


  const filterArray = (value) => {
    setFilter(value)
    let filtered = pokemonsFiltered.filter((poke) => poke.status !==  "rejected")
    filtered = orderArray(value, filtered)
    setPokemonsFiltered(filtered)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pokemons = await searchArrayPokemons(pokemonArray)
    setPokemonsFiltered(pokemons)
  }
 
  return (
    <form >
      <label>Ingrese varios pokemonId separados por un espacio para obtener los datos de los mismo y podes filtrarlos luego</label>
      <input onChange={ (e) => { setPokemonArray(e.target.value) }} value={ pokemonArray } type={'text'} placeholder={'Ingrese ids'}/>
      <select onChange={ (e) => { filterArray(e.target.value) }} value={ filter }>
        <option value=''>No filtrar</option> 
        <option value='name'>nombre</option>
        <option value='type'>tipo</option>
        <option value='weight'>peso</option>
      </select>
      <button onClick={ handleSubmit } type='submit'>
        Buscar
      </button>
      {pokemonsFiltered.length > 0 && pokemonsFiltered.map(({value, status}, index) => (
        status === 'rejected' ? 'No se encontro' :
      <div key={value.name + index }>
        Nombre: <span style={{color: '#30c7f5'}}> { value.name } </span>  
        Peso: <span style={{color: '#30c7f5'}}> { value.weight } </span>  
        Tipo: <span style={{color: '#30c7f5'}}> { value.types.map(({ type }) => <span key={ type.name }> { type.name } </span>) }</span> 
      </div>))}
    </form>
  )
}
