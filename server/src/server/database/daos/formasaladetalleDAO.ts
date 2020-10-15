import { Int } from './../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let formaSalaDetalleDAO = new GenericDAO(
    new Model(
        "formasaladetalle",
        [
            new Field("id", new ID()),
            new Field("idcabecera", new Int()),
            new Field("row", new Int()),
            new Field("col", new Int()),        
        ]
    )
)

export default formaSalaDetalleDAO