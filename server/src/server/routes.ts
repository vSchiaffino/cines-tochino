import { Application } from "express";
import categorias from "./routes/categorias";
import funciones from "./routes/funciones";
import peliculas from "./routes/peliculas";
import reservas from "./routes/reservas";
import { salasRoute } from "./routes/salas";
import users from "./routes/users";

export default function routes(app: Application)
{
    app = funciones(app)
    app = peliculas(app)
    app = salasRoute(app)
    app = users(app)
    app = reservas(app)
    app = categorias(app)
    return app
}