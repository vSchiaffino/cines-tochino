import { Int } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let formaSalaCabeceraDAO = new GenericDAO(
    new Model(
        "formasalacabecera",
        [
            new Field("id", new ID()),
            new Field("rows", new Int()),
            new Field("cols", new Int()),
            new Field("totalseats", new Int()),        
        ]
    )
)

export default formaSalaCabeceraDAO