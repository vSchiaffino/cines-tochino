import { Int } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let reservasDAO = new GenericDAO(
    new Model(
        "reservas",
        [
            new Field("id", new ID()),
            new Field("iduser", new Int()),
            new Field("idfuncion", new Int()),
            new Field("row", new Int()),
            new Field("col", new Int()),
        ]
    )
)

export default reservasDAO