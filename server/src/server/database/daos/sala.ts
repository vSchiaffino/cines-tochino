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
            new Field("nombresala", new Varchar(50, false)),
            new Field("rows", new Int()),
            new Field("cols", new Int()),
            new Field("totalseats", new Int()),
        ]
    )
)

export default salaDAO