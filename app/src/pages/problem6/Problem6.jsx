import React from 'react'
import { useState } from 'react'
import { findPokemon } from './services'

export const Problem6 = () => {

  const [pokemon, setPokemon] = useState({})
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setPokemon({})
      setLoading(true)
      const poke = await findPokemon(value)
      setPokemon(poke)
      
    } catch (error) {
      setError('No se encontro el Pokemon')
    }
    setLoading(false)
  }

  return (
    <div>
      <div>
        <label>Ingrese un Id o un nombre de un Pokemon</label>
        <input onChange={ (e) => { setValue(e.target.value) }} value={value} type={'text'} placeholder={'Ingrese un Id/nombre'}></input>
        <button onClick={handleSubmit} type={'submit'}>Buscar</button>
        { pokemon.length > 0 ? pokemon.map((pok) => (
          <div key={pok.id}>
            {console.log(pok)}
            <h3>{pok.id}</h3>
            <h3>{pok.name}</h3>
            <h3>{pok.id}</h3>
            <h3>{pok.weight}</h3>
            <h3>{pok.height}</h3>
            <img src={pok.image} alt={pok.name} />
          </div>
        )) : null}
        {error && <div>{error}</div>}
        {loading && <div>cargando...</div>}
      </div>
    </div>
  )
}
