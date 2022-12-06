import React, { useState } from 'react'

export const Problem2 = () => {

  const [ type, setType ] = useState("")
  const [ typeTotal, setTypeTotal ] = useState(0)
  const [ firstNumber, setFirstNumber ] = useState(null)
  const [ secondNumber, setSecondNumber ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div>
      <label>Ingrese un tipo de pokemon</label>
      <input onChange={ (e) => { setType(e.target.value) }} value={type} type={'text'} placeholder={'Ingrese un tipo'}></input>
      <button onClick={handleSubmit} type={'submit'}>Multiplicar</button>
      <h2>El total de pokemones de tipo {type} es:   {typeTotal}</h2>
    </div>
  )
}
