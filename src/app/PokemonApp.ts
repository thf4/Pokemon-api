import axios from 'axios';

import { PokemonDto } from "../types/dto/PokemonDto";

class PokemonApp {
    constructor() { };

    public async listAll(): Promise<PokemonDto[]> {

        const pokemon = await axios.get<PokemonDto[]>(`https://pokeapi.co/api/v2/pokemon/`);

        return pokemon.data;
    };

    public async get(id: number): Promise<PokemonDto> {
        const pokemon = await axios.get<PokemonDto>(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokeInfo: PokemonDto = {
            id: pokemon.data.id,
            name: pokemon.data.name,
            baseExperience: pokemon.data.baseExperience,
            abilities: pokemon.data.abilities
        };

        return pokeInfo
    };
};

export default PokemonApp;