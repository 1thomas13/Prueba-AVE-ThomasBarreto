import React from 'react'
import { useState } from 'react'

export const Problem8 = () => {

  const [imageQuantity, setImageQuantity] = useState('')
  const [images, setImages] = useState([])
  const URL = 'https://picsum.photos/320/160?random='

  const generateNumber = () => Math.floor(Math.random() * 10000000)

  const handleSubmit = () => {
    setImages([])
    for (let i = 0;i < imageQuantity;i++) {
      setImages(images => [...images, URL + generateNumber()])
    }
  }
  
  const handleNumChange = event => {
    const value = event.target.value
    if(value > 15) return 
    setImageQuantity(value)
  }

  return (
    <div>
      <label htmlFor='imageQuantity'>Ingrese cantidad de imagenes a rederizar max:15</label>
      <input max={15} id='imageQuantity' onChange={ handleNumChange } value={ imageQuantity } type={'number'} placeholder={'Ingrese un numero'}></input>
      <button onClick={handleSubmit} type={'submit'}>Enviar</button>
      <div>
       { images.map(img => (<img style={photo} key={img} src={img} alt={img} />)) }
      </div>
    </div>
  )
}

const photo = {
  margin: 0,
  padding: '2px 4px'
}
