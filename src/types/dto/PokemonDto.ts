import { Ability, Pokemon } from "../Pokemon";

export class PokemonDto implements Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    abilities: [Ability];
};
