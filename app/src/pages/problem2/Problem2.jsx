import React, { useState } from 'react'
import { totalType, searchTotalPokemonsForType, searchPokemonByName, searchPokemonFilter, searchPokemonById, searchPokemonByTypeAndId } from './services'

export const Problem2 = () => {

  const [ type, setType ] = useState("")
  const [ typeTotal, setTypeTotal ] = useState(0)
  const [ firstType, setFirstType ] = useState('')
  const [ secondType, setSecondType ] = useState('')
  const [ name, setName ] = useState('')
  const [ id, setId ] = useState('')
  const [ idsearch, setIdSearch ] = useState('')
  const [ pokemon, setPokemon ] = useState([])
  const [ pokemons, setPokemons ] = useState([])
  const [ serachId, setSerachId ] = useState(0)

  const [ serachtype, setSerachtype ] = useState('')
  const [ exist, setExist ] = useState(null)

  const [ arreglo, setArreglo ] = useState([])

  const handleSubmit = async(e) => {
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

  const handleSubmit4 = async(e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonById(idsearch)
    setPokemon(total)
  }

  const handleSubmit5 = async(e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonFilter(arreglo)
    console.log(total)
    setExist(total)
  }

  const handleSubmit6 = async(e) => {
    e.preventDefault()
    console.log(idsearch)
    const total = await searchPokemonByTypeAndId(serachId,serachtype)
    console.log(total)
    setExist(total)
  }

  return (
    <>
      <div>
        <h5>los tipos de pokemon son: "normal""fighting""flying""poison""ground""rock""bug""ghost""steel""fire""water""grass""electric""psychic""ice""dragon""dark""fairy""unknown""shadow"</h5>
        <label>Ingrese un tipo de pokemon</label>
        <input onChange={ (e) => { setType(e.target.value) }} value={type} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit} type={'submit'}>Buscar</button>
        <h2>El total de pokemones de tipo { type } es:   {typeTotal}</h2>
      </div>
      <div>
        <label>Ingrese un tipo de pokemon</label>
        <input onChange={ (e) => { setFirstType(e.target.value) }} value={firstType} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <input onChange={ (e) => { setSecondType(e.target.value) }} value={secondType} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit2} type={'submit'}>Buscar</button>
        <h2>El total de pokemones de tipo { firstType }  { secondType} es:   {pokemons.length > 0 ? pokemons?.map((pokemon)=> pokemon) : null}</h2>
      </div>
      <div>
        <label>Buscar pokemon por nombre</label>
        <input onChange={ (e) => { setName(e.target.value) }} value={name} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit3} type={'submit'}>Buscar</button>
        <h2>El id del pokemon es  { name } es:  {id}</h2>
      </div>

      <div>
        <label>Buscar pokemon por id</label>
        <input onChange={ (e) => { setIdSearch(e.target.value) }} value={idsearch} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit4} type={'submit'}>Buscar</button>
        <h2>El id del pokemon es  { idsearch } es:  {pokemon.name} {pokemon.stats?.map(stat=> (stat.base_stat + stat.effort + stat.stat.name))}</h2>
      </div>

      <div>
        <label>Ingrese un tipo de pokemon</label>
        <input onChange={ (e) => { setSerachtype(e.target.value) }} value={serachtype} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <input onChange={ (e) => { setSerachId(e.target.value) }} value={serachId} type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button onClick={handleSubmit6} type={'submit'}>Buscar</button>
        <h2>El POKEMON CON EL ID { serachId } {exist === false ? 'No posee' : 'Si posee'} EL TIPO  { serachtype} </h2>
      </div>

      <div>
        <label>Ingrese id de pokemones</label>
        <input onChange={ (e) => { setArreglo(e.target.value) }} value={arreglo} type={'text'} placeholder={'Ingrese ids'}></input>
        <select>
          <option>Todos</option>
          <option>nombre</option>
          <option>tipo</option>
          <option>peso</option>
        </select>
        <button onClick={handleSubmit5} type={'submit'}>Buscar</button>
        <h2>El POKEMON CON EL ID { serachId } {exist === false ? 'No posee' : 'Si posee'} EL TIPO  { serachtype} </h2>
      </div>
    </>
  )
}
