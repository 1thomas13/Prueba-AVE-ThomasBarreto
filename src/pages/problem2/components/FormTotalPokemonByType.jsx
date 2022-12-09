import React, { useState } from 'react'
import { totalType } from '../services'

export const FormTotalPokemonByType = () => {

  const [ type, setType ] = useState('')
  const [ typeTotal, setTypeTotal ] = useState('')

  const handleSubmit = async (e) => {
    setTypeTotal('')
    e.preventDefault()
    const total = await totalType(type)
    setTypeTotal(total)
  }

  return (
    <form >
      <label>Ingrese un tipo de pokemon para saber el total</label>
      <input onChange={ (e) => { setType(e.target.value) }} value={ type } type={'text'} placeholder={'Ingrese un tipo'} />
      <button onClick={ handleSubmit } type={'submit'}>Buscar</button>
      {typeTotal !== '' && <h2> El total de pokemones con ese tipo es: {typeTotal}</h2>}
    </form>
  )
}
