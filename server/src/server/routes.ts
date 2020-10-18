import { Application } from "express";
import funciones from "./routes/funciones";
import peliculas from "./routes/peliculas";
import salas from "./routes/salas";
import users from "./routes/users";

export default function routes(app: Application)
{
    app = funciones(app)
    app = peliculas(app)
    app = salas(app)
    app = users(app)
    return app
}