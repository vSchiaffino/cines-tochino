import { Int, Varchar } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let categoriasDAO = new GenericDAO(
    new Model(
        "categorias",
        [
            new Field("id", new ID()),
            new Field("nombre", new Varchar(50, false)),
        ]
    )
)

export default categoriasDAO