import React from 'react'
import { useState } from 'react'

export const Problem8 = () => {

  const [imageQuantity, setImageQuantity] = useState(0)

  return (
    <div>
      <input onChange={ (e) => { setImageQuantity(e.target.value) }} value={imageQuantity} type={'number'} placeholder={'Ingrese un numero'}></input>
      <button onClick={handleSubmit} type={'submit'}>Multiplicar</button>
      <div>Resultado: {result}</div>
    </div>
  )
}
