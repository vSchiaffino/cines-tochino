import React, {Component} from 'react';
import { Grid , TextField }  from '@material-ui/core'
import { request } from '../../components/helpers/request'
import qs from 'qs'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions'


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            error: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.logueado = localStorage.getItem("user") !== null
    }
    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit(event) {
        const { user, password } = this.state
        try {
            let res = await request('post', `users/login`,{'Content-Type': 'application/x-www-form-urlencoded'}, qs.stringify({usuario: user, contrasena: password}));
            let { data } = res;
            if( data.ok ) {
                // buen login
                localStorage.setItem("user", JSON.stringify(data.user));
                this.setState({...this.state, redirect: true})
                this.props.dispatchLogin(data.user);
            }
            else{
                // mal login
                this.setState({...this.state, error: data.error})
            }
        } catch (error) {
            console.log(error);
        }
        event.preventDefault();
    }

    render(){
        return(
            this.logueado ?
            <Redirect to="/" />
            :
            this.state.redirect === true ?
            <Redirect to="/" />
            :
            <>
                <Grid className="mt-3" item>    

                    <TextField name="user" label="Nombre de usuario"  value={this.state.user} onChange={this.handleInputChange} variant="outlined" />

                </Grid>
                <Grid className="mt-3" item>

                    <TextField name="password" label="Contraseña"  value={this.state.password} onChange={this.handleInputChange} variant="outlined" />

                </Grid>
                <a className="btn btn-primary btn-lg" role="button" onClick={this.handleSubmit}>
                                Login 
                </a>
            {this.state.error != ''  &&  <p className="text-danger">{this.state.error}</p> }
            </>
    )}
}   

const mapDispatchToProps = dispatch => ({
    dispatchLogin: (user) => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(FormLogin)