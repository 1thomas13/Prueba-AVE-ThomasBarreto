import React, { useState } from 'react'

export const Problem1 = () => {

  const [ result, setResult ] = useState(null)
  const [ firstNumber, setFirstNumber ] = useState(null)
  const [ secondNumber, setSecondNumber ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult(0)

    let total = 0

    for (let i = 0; i < secondNumber; i++) total = total + Number(firstNumber)
    setResult(total)
  }

  return (
    <div>
      <div style={{display:'flex'}}>
        <input onChange={ (e) => { setFirstNumber(e.target.value) }} value={firstNumber} type={'number'} placeholder={'Ingrese un numero'}></input>
        <input onChange={ (e) => { setSecondNumber(e.target.value) }} value={secondNumber} type={'number'} placeholder={'Ingrese un numero'} ></input>
      </div>
     
      <button onClick={handleSubmit} type={'submit'}>Multiplicar</button>
      <h2>Resultado: {result}</h2>
    </div>
  )
}
