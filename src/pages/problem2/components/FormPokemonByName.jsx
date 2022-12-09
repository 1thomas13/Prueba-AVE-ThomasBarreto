import React, { useState } from 'react'
import { searchPokemonByName } from '../services'

export const FormPokemonByName = () => {

  const [ name, setName ] = useState('')
  const [ pokemonId, setPokemonId ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = await searchPokemonByName(name)
    setPokemonId(id)
  }

  return (
    <form>
      <label>Buscar pokemon por nombre para obtener su id</label>
      <input onChange={ (e) => { setName(e.target.value) }} value={name} type={'text'} placeholder={'Ingrese un nombre'}/>
      <button onClick={ handleSubmit } type={'submit'}>Buscar</button>
      { pokemonId !== '' && <h2>El id del pokemon es:  { pokemonId } </h2> }
    </form>
  )
}
