const URL = "https://pokeapi.co/api/v2"

export const findPokemon = async (value) => {
  try {
    const res = await fetch(`${URL}/pokemon/${value}`)
    const { name, id, weight, types, height, sprites }  = await res.json()
    
    const pokemon = {
      name,
      id,
      weight,
      types, 
      height, 
      image: sprites.other.dream_world.front_default
    }
    
    return [pokemon]

  } catch (error) {
    throw new Error()
  }
}