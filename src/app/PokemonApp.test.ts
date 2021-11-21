import { fakePokemon, fakePokemonId, fakePokemons } from "../../test/fakePokemon";
import PokemonApp from "./PokemonApp";

describe('Pokemon App test', () => {
    let pokemonApp: PokemonApp;

    beforeEach(async () => {
        pokemonApp = {
            get: () => Promise.resolve(fakePokemon),
            listAll: () => Promise.resolve(fakePokemons),
        } as unknown as PokemonApp;

        jest.clearAllMocks();
    });

    describe('list', () => {
        it('should list all pokemons', async () => {
            jest.spyOn(pokemonApp, 'listAll');

            const result = await pokemonApp.listAll();

            expect(result).toBe(fakePokemons);

            const [first] = result;

            expect(first.name).toBe(fakePokemon.name);
            expect(first.abilities).toBe(fakePokemon.abilities);
            expect(first.id).toBe(fakePokemon.id);
            expect(first.baseExperience).toBe(fakePokemon.baseExperience);
        });
    });

    describe('get by id', () => {
        it('should get by id pokemon', async () => {
            jest.spyOn(pokemonApp, 'get');

            const result = await pokemonApp.get(fakePokemonId);

            expect(result.name).toBe(fakePokemon.name);
            expect(result.abilities).toBe(fakePokemon.abilities);
            expect(result.id).toBe(fakePokemon.id);
            expect(result.baseExperience).toBe(fakePokemon.baseExperience);
        });

        it('should verify if pokemon exist', async () => {
            jest.spyOn(pokemonApp, 'get')
                .mockRejectedValue(new Error)
            
            const agent = () => pokemonApp.get(11);    

            await expect(agent()).rejects.toBeInstanceOf(Error);
        });
    });
});