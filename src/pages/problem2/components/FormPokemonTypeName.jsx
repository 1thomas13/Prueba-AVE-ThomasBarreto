import React from 'react'
import { useState } from 'react'
import { searchPokemonByTypeAndId } from '../services'

export const FormPokemonTypeName = () => {
  const [ id, setId ] = useState('')
  const [ type, setType ] = useState('')
  const [ pokemonExist, setPokemonExist ] = useState(null)

  const searchPokemonByTypeId = async (e) => {
    e.preventDefault()
    const result = await searchPokemonByTypeAndId(id, type)
    setPokemonExist(result)
  }
  return (
    <form>
      <label>Ingrese un id y un tipo de pokemon para saber si este posee el mismo</label>
      <input onChange={ (e) => { setId(e.target.value) }} value={ id } type={'number'} placeholder={'Ingrese un ID'}/>
      <input onChange={ (e) => { setType(e.target.value) }} value={ type } type={'text'} placeholder={'Ingrese un tipo'}/>
      <button onClick={ searchPokemonByTypeId } type={'submit'}> Buscar </button>
      {pokemonExist !== null && <h2>El pokemon {pokemonExist === false ? 'No posee' : 'Si posee'} el tipo </h2>}
    </form>
  )
}
