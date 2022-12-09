import React, { useState } from 'react'
import { searchTotalPokemonsFor2Types } from '../services'


export const FormPokemonsByTypes= () => {
  const [ pokemons, setPokemons ] = useState([])
  const [ firstType, setFirstType ] = useState('')
  const [ secondType, setSecondType ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await searchTotalPokemonsFor2Types(firstType, secondType)
    setPokemons(result)
  }

  return (
    <form >
      <label>Ingrese 2 tipos para saber el total de pokemon con ambos tipos</label>
      <input onChange={ (e) => { setFirstType(e.target.value) }} value={ firstType } type={'text'} placeholder={'Ingrese un tipo'}/>
      <input onChange={ (e) => { setSecondType(e.target.value) }} value={ secondType } type={'text'} placeholder={'Ingrese un tipo'}/>
      <button onClick={ handleSubmit } type='submit'>Buscar</button>
      { pokemons.length > 0 && <> 
          <h4>Los pokemones con ambos tipos son:</h4> 
          { pokemons?.map((pokemon)=> <span key={ pokemon } style={{color: '#30c7f5'}}>{` ${pokemon} `}</span>) }
      </>}
    </form>
  )
}


