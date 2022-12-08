import React, { useState } from 'react'
import { totalType, searchTotalPokemonsForType, searchPokemonByName, searchPokemonFilter, searchPokemonById, searchPokemonByTypeAndId } from './services'

export const Problem2 = () => {

  const [ type, setType ] = useState("")
  const [ typeTotal, setTypeTotal ] = useState('')
  const [ firstType, setFirstType ] = useState('')
  const [ secondType, setSecondType ] = useState('')
  const [ name, setName ] = useState('')
  const [ id, setId ] = useState('')
  const [ idsearch, setIdSearch ] = useState('')
  const [ pokemon, setPokemon ] = useState([])
  const [ pokemons, setPokemons ] = useState([])
  const [ serachId, setSerachId ] = useState('')

  const [ serachtype, setSerachtype ] = useState('')
  const [ exist, setExist ] = useState(null)

  const [ arreglo, setArreglo ] = useState([])

  const allTypes = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]

  const [pokemonsFiltered, setPokemonsFiltered] = useState([])
  const [filter, setFilter] = useState([])

  const handleSubmit = async(e) => {
    setTypeTotal('')
    e.preventDefault()
    const total = await totalType(type)
    setTypeTotal(total)
  }

  const handleSubmit2 = async(e) => {
    e.preventDefault()
    const total = await searchTotalPokemonsForType(firstType, secondType)
    setPokemons(total)
  }

  const handleSubmit3 = async(e) => {
    e.preventDefault()
    console.log(name)
    const total = await searchPokemonByName(name)
    setId(total)
  }

  const handleSubmit4 = async (e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonById(idsearch)
    setPokemon(total)
  }

  const handleSubmit5 = async (e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonFilter(arreglo)
    console.log(total)
    setExist(total)
  }

  const handleSubmit6 = async (e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonByTypeAndId(serachId,serachtype)
    console.log(total)
    setExist(total)
  }

  return (
    <>
     
      <div>
        <h3> Los tipos de pokemon son: </h3>
        <ul style={listStyle}>
        {allTypes.map(type => <li style={typeStyle} key={type}> { type } </li> )}
        </ul>
      </div>

      <div style={formStyle}>
        <label>Ingrese un tipo de pokemon para saber el total</label>
        <input onChange={ (e) => { setType(e.target.value) }} value={type} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit} type={'submit'}>Buscar</button>
        {typeTotal !== '' && <h2>El total de pokemones con ese tipo es:   {typeTotal}</h2>}
      </div>
     

      <div style={formStyle}>
        <label>Ingrese 2 tipos para saber el total de pokemon con ambos tipos</label>
        <input onChange={ (e) => { setFirstType(e.target.value) }} value={firstType} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <input onChange={ (e) => { setSecondType(e.target.value) }} value={secondType} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit2} type={'submit'}>Buscar</button>
        { pokemons.length > 0 && <> 
            <h4>Los pokemones con ambos tipos son:</h4> 
            {pokemons?.map((pokemon)=> <span key={ pokemon } style={{color: '#30c7f5'}}>{` ${pokemon} `}</span>)}
          </>}
      </div>

      <div style={formStyle}>
        <label>Buscar pokemon por nombre para obtener su id</label>
        <input onChange={ (e) => { setName(e.target.value) }} value={name} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit3} type={'submit'}>Buscar</button>
        {id !== '' && <h2>El id del pokemon es:  {id} </h2>}
      </div>

      <div style={formStyle}>
        <label>Buscar pokemon por id para obtener sus estadísticas</label>
        <input onChange={ (e) => { setIdSearch(e.target.value) }} value={idsearch} type={'number'} placeholder={'Ingrese un id'}></input>
        <button onClick={handleSubmit4} type={'submit'}>Buscar</button>
        {pokemon.length !== 0 && pokemon.name ? <h4>
          El pokemon es:  { pokemon.name } <br/>Estadísticas: {pokemon.stats?.map(stat=> (<div>
            Nombre: <span style={{color: '#30c7f5'}}> { stat.stat.name } </span> 
            Base: <span style={{color: '#30c7f5'}}> { stat.base_stat } </span>  
            Esfuerzo: <span style={{color: '#30c7f5'}}> { stat.effort }</span> 
          </div>))}</h4>
          : pokemon
        }
      </div>

      
      <div style={formStyle}>
        <label>Ingrese id de pokemones</label>
        <input onChange={ (e) => { setArreglo(e.target.value) }} value={arreglo} type={'text'} placeholder={'Ingrese ids'}></input>
        <select>
          <option>No filtrar</option>
          <option>nombre</option>
          <option>tipo</option>
          <option>peso</option>
        </select>
        <button onClick={handleSubmit5} type={'submit'}>Buscar</button>
        <h2>El POKEMON CON EL ID { serachId } {exist === false ? 'No posee' : 'Si posee'} EL TIPO  { serachtype} </h2>
      </div>

      <div style={formStyle}>
        <label>Ingrese un id y un tipo de pokemon para saber si este posee el mismo</label>
        <input onChange={ (e) => { setSerachtype(e.target.value) }} value={serachtype} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <input onChange={ (e) => { setSerachId(e.target.value) }} value={serachId} type={'number'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit6} type={'submit'}>Buscar</button>
        {exist !== null && <h2>El pokemon {exist === false ? 'No posee' : 'Si posee'} el tipo </h2>}
      </div>

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
  flexWrap: 'wrap'
}

const formStyle = {
  marginBottom: '50px'
}
