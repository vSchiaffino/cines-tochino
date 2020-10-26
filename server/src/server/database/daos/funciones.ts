import { Int, Float, Datetime_t } from './../dao/model/types/index';
import { ID, Varchar } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let funcionesDAO = new GenericDAO(
    new Model(
        "funciones",
        [
            new Field("id", new ID()),
            new Field("idpelicula", new Int(true, false)),
            new Field("idsala", new Int(true, false)),
            new Field("seatprice", new Float(true, false)),
            new Field("formato", new Varchar(10, false)),
            new Field("fecha", new Datetime_t(false)),
            new Field("hora", new Varchar(12, false))
        ]
    )
)

export default funcionesDAO