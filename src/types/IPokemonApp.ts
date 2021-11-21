import { PokemonDto } from "./dto/PokemonDto";

export interface IPokemonApp {
    listAll(): Promise<PokemonDto[]>
    get(id: number): Promise<PokemonDto>;
}