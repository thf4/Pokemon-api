import request from "supertest";
import { fakePokemon, fakePokemonId, fakePokemons } from "../../test/fakePokemon";
import PokemonApp from "../app/PokemonApp";
import app from '../main';

describe('PokeDexController test', () => {
    let pokemonApp: PokemonApp;

    beforeEach(async () => {
        pokemonApp = {
            get: () => Promise.resolve(fakePokemon),
            listAll: () => Promise.resolve(fakePokemons),
        } as unknown as PokemonApp;

        jest.clearAllMocks();
    });

    describe('list', () => {
        it('should status code 200', async () => {
            jest.spyOn(pokemonApp, 'listAll');

            await request(app)
                .get('/')
                .expect(200)
        });
    });

    describe('get', () => {
        it('should get by id a pokemon info', async () => {
            jest.spyOn(pokemonApp, 'get');

            await request(app)
                .get(`/${fakePokemonId}`)
                .expect(200)
        });
    });
});