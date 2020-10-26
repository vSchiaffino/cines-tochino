import { Int } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let peliculasActoresDAO = new GenericDAO(
    new Model(
        "peliculas_actores",
        [
            new Field("id", new ID()),
            new Field("idpelicula", new Int()),
            new Field("idactor", new Int()),
        ]
    )
)

export default peliculasActoresDAO