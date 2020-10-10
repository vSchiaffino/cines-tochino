const funcionesRoute = require("./routes/funciones");
const peliculasRoute = require("./routes/peliculas");
const salasRoute = require("./routes/salas");
const usersRoute = require("./routes/users");


module.exports = (server) => {
    server = funcionesRoute(server)
    server = peliculasRoute(server)
    server = salasRoute(server)
    server = usersRoute(server)

    return server;
}
