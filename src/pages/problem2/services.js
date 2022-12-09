
const URL = "https://pokeapi.co/api/v2"

export const totalType = async (type) => {
  try {
    const res = await fetch(`${URL}/type/${type}`)
    const { pokemon: total } = await res.json()
  
    return total.length
  } catch (error) {
    return 0
  }
}

export const searchTotalPokemonsFor2Types = async (type1, type2) => {
  try {
  
    const pokemonsByType = async (type) => {
      const response = await fetch(`${URL}/type/${type}`)
      const res = await response.json()
      return res.pokemon?.map(pokemon => pokemon.pokemon.name)
    }
  
    let [pokemonList1, pokemonList2] = await Promise.all([ pokemonsByType(type1), pokemonsByType(type2) ])
    
    const filteredPokemons = pokemonList1.filter((pokemonName) => pokemonList2.includes(pokemonName) )
    if (filteredPokemons.length === 0) throw new Error(["No se encontro ninguno"])

    return filteredPokemons
  } catch (error) {
    return ["No se encontro ninguno"]
  }
}

export const searchPokemonByName= async (name) => {
  try {
  
    const res = await fetch(`${URL}/pokemon/${name}`)
    const {id} = await res.json()
    if (!id) return ("No se encontro ninguno")
    
    return id
  } catch (error) {
    return ["No se encontro ninguno"]
  }
}

export const searchPokemonById= async (id) => {
  try {
  
    const res = await fetch(`${URL}/pokemon/${id}`)
    const { name, stats } = await res.json()

    return {name, stats}
  } catch (error) {
    return "No se encontro ninguno"
  }
}

export const searchArrayPokemons= async (pokemonArray) => {
  try {
    let arrayParsed = pokemonArray.replace(/\s+/g, '').split('')
    
    const pokemons= async (element) => {
      const res = await fetch(`${URL}/pokemon/${element}`)
      const {name, types, weight} = await res.json()
      return  {name, types, weight}
    }
  
    const list = await Promise.allSettled(arrayParsed.map((element)=> pokemons(element)))
    return list
    
  } catch (error) {
    return ["No se encontro ninguno"]
  }
}

export const searchPokemonByTypeAndId= async (id, typesa ) => {
  try {
  
    const res = await fetch(`${URL}/pokemon/${id}`)
    const { name,types } = await res.json()

    return types.some((type)=> type.type.name === typesa)
    
  } catch (error) {
    return ["No se encontro ninguno"]
  }
}