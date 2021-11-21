import { Request, Response } from "express";
import PokemonApp from "../app/PokemonApp";

class PokeDexController {

    constructor() { }

    public async listAll(req: Request, res: Response): Promise<Response> {
        try {
            const pokemon = new PokemonApp();
            const response = await pokemon.listAll();
    
            return res.json(response).status(200);
        } catch(err) {
            return res.json({ message: 'Error list all pokemons' }).status(404);
        };
    };

    public async get(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const pokemon = new PokemonApp();
            const response = await pokemon.get(parseInt(id));
    
            return res.json(response).status(200);
        } catch (err) {
            return res.json({ message: 'Pokemon not found' }).status(404);
        };
    };
};

export default PokeDexController;