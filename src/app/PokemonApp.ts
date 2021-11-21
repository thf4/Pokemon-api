import axios from 'axios';

import { PokemonDto } from "../types/dto/PokemonDto";

class PokemonApp {
    constructor() { };

    public async listAll(): Promise<PokemonDto[]> {
        try {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    
            return pokemon.data;
        } catch (err) {
            return err;
        }
    };

    public async get(id: number): Promise<PokemonDto> {
        try {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            if (!pokemon)
                throw new Error('Pokemon not found');
            
            const pokeInfo = {
                id: pokemon.data.id,
                name: pokemon.data.name,
                baseExperience: pokemon.data.baseExperience,
                abilities: pokemon.data.abilities
            };
    
            return pokeInfo
        } catch (err) {
            return err;
        }
    
    };
};

export default PokemonApp;