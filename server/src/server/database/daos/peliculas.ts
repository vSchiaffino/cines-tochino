import { ID, Varchar, Date_t } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let peliculasDAO = new GenericDAO(
    new Model(
        "peliculas",
        [
            new Field("id", new ID()),
            new Field("titulo", new Varchar(100, false)),
            new Field("sinopsis", new Varchar(700, false)),
            new Field("estreno", new Date_t(false)),
            new Field("director", new Varchar(100, false)),
        ]
    )
)

export default peliculasDAO