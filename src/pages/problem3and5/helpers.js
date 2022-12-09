
export const min16Characters = (password) => {
  if (password.length > 15) return true
  return false
}

export const hasLowerCaseAndUpperCase = (arrayPassword) => {
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

  return existLowercase && existUppercase  ?  true :  false
}

export const validateRepeatCharacter = (arrayPassword) => {
  const validateRepeatLett = arrayPassword.some( (_character, index) => {
    return arrayPassword[index] === arrayPassword[index+1]
  })

  return !validateRepeatLett
}

export const min4Number = (arrayPassword) => {
  const totalNumbers = arrayPassword.reduce((accumulator, character) => (
    !isNaN(character) ? accumulator + 1 : accumulator + 0
  ), 0)
  
  if (totalNumbers > 3) return true
}

export const validationSpecialCharacters = (arrayPassword, password) => {
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
    if (characterSpecial.includes(clave)) {
      if (result[clave] > 1) repeatspecialCharactersInPass = true
    }
  }

  if (!repeatspecialCharactersInPass && !validateRepeatSpecialcerca && totalCharacterSpecial >= 2 ) return true
}
  
export const notEmptyCharacters = (password) => {
  if (!password.includes(' ')) return true
  return false
}

export const not0Characters = (password) => {
  if (!password.includes('0')) return true
}

