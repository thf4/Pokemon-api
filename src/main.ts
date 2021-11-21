import express from 'express';
import routers from './routers/routers';

class App {
    public express: express.Application

    public constructor () {
        this.express = express();
        this.routes();
    }

    private routes (): void {
        this.express.use(routers);
    }
}

export default new App().express;