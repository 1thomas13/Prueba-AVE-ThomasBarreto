import React from 'react'
import { useState } from 'react'
import { findPokemon } from './services'
import './index.css'

export const Problem6 = () => {

  const [pokemon, setPokemon] = useState({})
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setError(null)
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
          <card className='cardPokemon' key={pok.id}>
            <div className='previewCard'>
              <img src={pok.image} alt={pok.name} />
              <h3>{pok.name} <span>N°{pok.id}</span> </h3>
            </div>
            <div className='content'>
              {pok.types.map((type) => <div className='types' key={type.type.name}>
                <span>{type.type.name}</span>
              </div>)}
              <h5>Peso {pok.weight} </h5>
              <h5>Altura {pok.height} </h5>
            </div>
            
            
          </card>
        )) : error && <div className={'cardPokemon'}>{<h2>{error}</h2>}</div>}
        
        {loading && <div>cargando...</div>}
      </div>
    </div>
  )
}

