import { Router } from "express";
import PokemonApp from "../app/PokemonApp";
import PokeDexController from "../controllers/PokeDexController";

const routers = Router();
const pokeDexController = new PokeDexController(new PokemonApp())
routers.get('/', pokeDexController.listAll);

routers.get('/:id', pokeDexController.get);




export default routers;