import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router-dom';
import { request } from '../../components/helpers/request'
import qs from 'qs'

export default class DetallesCuenta extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        token: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
        this.state={
            user: null,
            redirect:false
        }
        this.clearAndRedirect = this.clearAndRedirect.bind(this);
    }

    clearAndRedirect(event){
        localStorage.clear()
        this.setState({...this.state, redirect:true})
    }

    async componentDidMount() {
        try {
            let state = this.state;
            state.user = JSON.parse(localStorage.getItem("user"));
            this.setState(state);
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            this.state.redirect == true ?
                <Redirect to="/"></Redirect>
            :
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
                <Grid item lg={6} xs={12} md={3}>
                    <button className="btn btn-primary mt-2 ml-4" onClick={this.clearAndRedirect}> Salir </button>
                </Grid>
            </Grid>
            :
            <></>
        )
    }
}

