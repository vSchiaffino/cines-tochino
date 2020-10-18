import { Hash } from './../dao/model/types/index';
import { ID, Varchar } from '../dao/model/types/index';
import { Model } from '../dao/model/model';
import { GenericDAO } from '../dao/genericDao';
import { Field } from '../dao/model/field';

let usersDAO = new GenericDAO(
    new Model(
        "users",
        [
            new Field("id", new ID()),
            new Field("nombre", new Varchar(150, false)),
            new Field("usuario", new Varchar(100, false, false, true)),
            new Field("contrasena", new Hash(false)),
            new Field("mail", new Varchar(320, false)),
            new Field("token", new Hash(false, false, true)),
        ]
    )
)

export default usersDAO