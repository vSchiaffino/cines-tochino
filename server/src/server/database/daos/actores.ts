import { Varchar } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let actoresDAO = new GenericDAO(
    new Model(
        "actores",
        [
            new Field("id", new ID()),
            new Field("nombre", new Varchar(200, false)),
        ]
    )
)

export default actoresDAO