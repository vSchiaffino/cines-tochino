import { Int } from '../dao/model/types/index';
import { ID } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let formaSala = new GenericDAO(
    new Model(
        "formasala",
        [
            new Field("id", new ID()),
            new Field("idsala", new Int()),
            new Field("row", new Int()),
            new Field("col", new Int()),        
        ]
    )
)

export default formaSala