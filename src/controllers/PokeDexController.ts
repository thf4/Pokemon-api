import { Request, Response } from "express";
import PokemonApp from "../app/PokemonApp";

class PokeDexController {
    constructor(private pokemonApp: PokemonApp) {}

    public async listAll (req: Request, res: Response): Promise<Response> {
        const pokemon = await this.pokemonApp.listAll();
        
        return res.json(pokemon).status(200);
    };

    public async get (req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const pokemon = await this.pokemonApp.get(parseInt(id));

        return res.json({ pokemon }).status(200);
    };
};

export default PokeDexController;