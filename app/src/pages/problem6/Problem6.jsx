import React from 'react'

export const Problem6 = () => {
  return (
    <div>
      <div>
        <h5>los tipos de pokemon son: "normal""fighting""flying""poison""ground""rock""bug""ghost""steel""fire""water""grass""electric""psychic""ice""dragon""dark""fairy""unknown""shadow"</h5>
        <label>Ingrese un tipo de pokemon</label>
        <input  type={'text'} placeholder={'Ingrese un tipo'}></input>
        <button  type={'submit'}>Buscar</button>
      </div>
    </div>
  )
}
