import bodyParser from 'body-parser';
import { Application, Express, json } from 'express';
import routes from './routes';

export default function config(app: Application): Application {
    // ENV VARIABLES
    process.env.PORT = process.env.PORT || '3000'
    // MIDDLEWARES
    app.use(json())
    app.use(bodyParser.urlencoded({ extended: false }))
    // ROUTES
    app = routes(app)
    // RETURN
    return app
}