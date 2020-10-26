import bodyParser from 'body-parser';
import { Application, Express, json } from 'express';
import routes from './routes';
import cors from 'cors'

export default function config(app: Application): Application {
    // ENV VARIABLES
    process.env.PORT = process.env.PORT || '1500'
    process.env.SUDO_KEY = process.env.SUDO_KEY || '844a8db879070204c0485c6c2e9e6d9067dc97aff5e9b934e2e1335dbb8a5023'
    // MIDDLEWARES
    app.use(json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors())
    // ROUTES
    app = routes(app)
    // RETURN
    return app
}