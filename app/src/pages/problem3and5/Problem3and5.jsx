import React, { useState } from 'react'
import { useEffect } from 'react'
import { BiCheckCircle, BiErrorCircle} from 'react-icons/bi'

export const Problem3and5 = () => {
  const errors  = [
    { error: 'Al menos 16 caracteres', fulfilled: false },
    { error: 'Letras minúsculas y mayúsculas', fulfilled: false },
    { error: 'No puede tener 2 caracteres iguales consecutivas', fulfilled: true },
    { error: 'Al menos 4 números', fulfilled: false },
    { error: 'Al menos 2 caracteres especiales !@#$%ˆ&*-_+=? pero ninguno de ellos puede repetirse y además los caracteres no pueden estar juntos',
     fulfilled: true },
    { error: 'No se puede usar el número 0', fulfilled: true },
    { error: 'No se puede colocar espacios', fulfilled: true },
  ]  

  const [ password, setPassword ] = useState('')
  const [ validations, setValidations ] = useState(errors)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password.length > 15)  console.log('first')

    console.log(password)
    alert('password invalida')
  }

  const validatePassword = () => {
   
    const arrayPassword = password.trim().split('')
    console.log(arrayPassword)
   
 
    // validacion de 16 caracteres
    if (password.length > 15) setValidations([ ...errors, errors[0].fulfilled = true ])
    else setValidations([ ...errors, errors[0].fulfilled = false ])

    // validacion de minusculas y mayusculas
    let existUppercase = false
    let existLowercase = false
 
    for ( let character of arrayPassword) {
      
      if (character === ' ') null
      if (!isNaN(character)) null
      else {
        if (character === character.toUpperCase()) existUppercase = true
        if (character === character.toLowerCase()) existLowercase = true
      }
    }

    if (existLowercase && existUppercase) setValidations([ ...errors, errors[1].fulfilled = true ])
    else setValidations([ ...errors, errors[1].fulfilled = false ])

    // validacion de 2 letras consecutivas
   
    const validateRepeatLett = arrayPassword.some( (_character, index) => {
      return arrayPassword[index] === arrayPassword[index+1]
    })

    setValidations([ ...errors, errors[2].fulfilled = !validateRepeatLett ])

    // validacion de 4 numeros
    const totalNumbers = arrayPassword.reduce((accumulator, character) => (
      !isNaN(character) ? accumulator + 1 : accumulator + 0
    ), 0)
    
    if (totalNumbers > 3) setValidations([ ...errors, errors[3].fulfilled = true ])
    else setValidations([ ...errors, errors[1].fulfilled = false ])

     // validacion caracteres especiales
    const characterSpecial = [ '!', '@', '#', '$', '%', 'ˆ', '&', '*', '-', '_', '+', '=', '?' ]
   

    const totalCharacterSpecial = arrayPassword.reduce((accumulator, character) => (
      characterSpecial.includes(character) ? accumulator + 1 : accumulator + 0
    ), 0)
   
    const validateRepeatSpecialcerca = arrayPassword.some( (_character, index) => {
      return characterSpecial.includes(arrayPassword[ index ]) && characterSpecial.includes(arrayPassword[ index +1 ])
    })

    let result = {};
    for (let str of password) {
      result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
    }
    
    let repeatspecialCharactersInPass = false

    for (let clave in result){
      if(characterSpecial.includes(clave)) {
        if (result[clave] > 1) repeatspecialCharactersInPass = true
      }
    }
    console.log(repeatspecialCharactersInPass, validateRepeatSpecialcerca, totalCharacterSpecial)

    if (!repeatspecialCharactersInPass && !validateRepeatSpecialcerca && totalCharacterSpecial >= 2 ) {
      setValidations([ ...errors, errors[4].fulfilled = true ])
    } else setValidations([ ...errors, errors[4].fulfilled = false ])
    

    if (!password.includes('0')) setValidations([ ...errors, errors[5].fulfilled = true ])
    else setValidations([ ...errors, errors[5].fulfilled = false ])

    if (!password.includes(' ')) setValidations([ ...errors, errors[6].fulfilled = true ])
    else setValidations([ ...errors, errors[6].fulfilled = false ])

  }

  useEffect(() => {
    validatePassword()
  }, [password]);

  return (
    <div>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <input onChange={ (e) => { setPassword(e.target.value) }} value={password} type='password' placeholder={'Ingrese una password'}></input>
      </div>
     
      <button onClick={handleSubmit} type={'submit'}>Enviar</button>
      <h3> La password debe tener: </h3>
      { validations.map((validation) => {
        return <p key={ validation.error } style={{ color: validation.fulfilled ? '#92ee92' : '#e94040', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}> 
          { validation.fulfilled && <BiCheckCircle/> }
          { validation.fulfilled === false && <BiErrorCircle/> } 
          { validation.error } 
        </p>
      })}
    </div>
  )
}
