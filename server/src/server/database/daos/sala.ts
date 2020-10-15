import { Int } from './../dao/model/types/index';
import { ID, Varchar } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let salaDAO = new GenericDAO(
    new Model(
        "sala",
        [
            new Field("id", new ID()),
            new Field("idformasala", new Int()),
            new Field("nombresala", new Varchar(50, false)),
        ]
    )
)

export default salaDAO