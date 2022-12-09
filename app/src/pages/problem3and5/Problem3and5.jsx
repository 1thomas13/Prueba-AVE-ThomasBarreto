import React, { useState } from 'react'
import { useEffect } from 'react'
import { BiCheckCircle, BiErrorCircle} from 'react-icons/bi'
import { hasLowerCaseAndUpperCase, min16Characters, min4Number, not0Characters, notEmptyCharacters, validateRepeatCharacter, validationSpecialCharacters } from './helpers'

export const Problem3and5 = () => {
  const errors  = [
    { error: 'Al menos 16 caracteres', fulfilled: false },
    { error: 'Letras minúsculas y mayúsculas', fulfilled: false },
    { error: 'No puede tener 2 caracteres iguales consecutivas', fulfilled: true },
    { error: 'Al menos 4 números', fulfilled: false },
    { error: 'Al menos 2 caracteres especiales !@#$%ˆ&*-_+=? pero ninguno de ellos puede repetirse y además los caracteres no pueden estar juntos', fulfilled: true },
    { error: 'No se puede usar el número 0', fulfilled: true },
    { error: 'No se puede colocar espacios', fulfilled: true }
  ]  

  const [ password, setPassword ] = useState('')
  const [ validations, setValidations ] = useState(errors)

  const handleSubmit = (e) => {
    e.preventDefault()
    let isNotValid = [...validations]
    isNotValid.pop()
    isNotValid = isNotValid.some(({fulfilled}) => {
      return fulfilled !== true
    })
    
    if (isNotValid === true) return alert('password invalida') 
    alert('password valida')
  }

  const validatePassword = () => {
   
    const arrayPassword = password.trim().split('')
    setValidations([ ...errors, errors[0].fulfilled = min16Characters(password) ])
    setValidations([ ...errors, errors[1].fulfilled = hasLowerCaseAndUpperCase(arrayPassword) ])
    setValidations([ ...errors, errors[2].fulfilled = validateRepeatCharacter(arrayPassword) ])
    setValidations([ ...errors, errors[3].fulfilled = min4Number(arrayPassword) ])
    setValidations([ ...errors, errors[4].fulfilled = validationSpecialCharacters(arrayPassword, password) ])
    setValidations([ ...errors, errors[5].fulfilled = not0Characters(password) ])
    setValidations([ ...errors, errors[6].fulfilled = notEmptyCharacters(password) ])
    
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
        return <div key={ validation.error } style={{ color: validation.fulfilled ? '#92ee92' : '#e94040', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}> 
          { validation.fulfilled && <BiCheckCircle/> }
          { validation.fulfilled === false && <BiErrorCircle/> } 
          { validation.error } 
        </div>
      })}
    </div>
  )
}
