import { PokemonDto } from "../src/types/dto/PokemonDto";

export const fakePokemon: PokemonDto = {
    id: 2,
    name: 'Bulbasauer',
    baseExperience: 35,
    abilities: [{
        name: 'ghrow',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
    }]
}

export const fakePokemons = [fakePokemon];

export const fakePokemonId = 5;