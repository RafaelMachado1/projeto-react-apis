export const HomePage = (navigate)=>{
    navigate('/')
}

export const PokedexPage = (navigate) =>{
    navigate('/pokedex')
}

export const PokemonDetalhePage = (navigate, namePokemon)=>{
    navigate(`/pokemon/detalhes/${namePokemon}`)
}