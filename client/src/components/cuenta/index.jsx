import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { request } from '../../components/helpers/request'
import qs from 'qs'

export default class DetallesCuenta extends Component {
    static propTypes = {
        //charlar con valen sobre que se le va a pasar para buscar el user
        id: PropTypes.number.isRequired,
        token: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
        this.state={
            user: null
        }
    }

    async componentDidMount() {
        try {
            let res = await request('post', `users/login`,{'Content-Type': 'application/x-www-form-urlencoded'}, qs.stringify({usuario: 'facuzer', contrasena: 'pepito123'}))
            console.log(res)
            this.setState({...this.state, user: res.data.user})
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            this.state.user ? 
            <Grid className="media mb-3" container justify="center" alignItems="center" alignContent="center">
                <Grid item lg={3} xs={12} md={3}>
                    <img className="card-img-left rounded-circle"  width="200" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                </Grid>
                <Grid  className="container flex-column " item container lg={9}  xs={12} md={9} justify="center">
                    <Grid item>
                        <h3 className="font-weight-bold col-10"> Nombre: <span className="font-weight-normal"> {this.state.user.nombre}</span></h3>
                        <h3 className="font-weight-bold col-10"> Usuario: <span className="font-weight-normal"> {this.state.user.usuario}</span></h3>
                        <h3 className="font-weight-bold col-10"> Mail: <span className="font-weight-normal"> {this.state.user.mail}</span></h3>
                    </Grid>
                </Grid>
            </Grid>
            :
            <></>
        )
    }
}

