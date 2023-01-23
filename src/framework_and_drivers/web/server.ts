import express, { json } from 'express';
import { routes as appRoutes } from './routes/index';

export class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.HTTP_PORT || 3000);
        this.app.use(json());
    }

    async routes() {
        this.app.use(appRoutes);
    }

    async start() {
        try {
            this.routes();
            this.app.listen(this.app.get('port'), () => {
                console.log(
                    `🆗 Express Application Running on port ${this.app.get('port')}`,
                );
            });
        } catch (error) {
            console.error(error);
        }
    }
}
