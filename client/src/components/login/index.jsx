import React, {Component} from 'react';
import { Grid , TextField }  from '@material-ui/core'
import { request } from '../../components/helpers/request'
import qs from 'qs'


export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
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
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        event.preventDefault();
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>  
            <Grid className="mt-3" item>    

                <TextField  name="user" label="Nombre de usuario"  value={this.state.user} onChange={this.handleInputChange} variant="outlined" />

            </Grid>
            <Grid className="mt-3" item>

                <TextField name="password" label="Contraseña"  value={this.state.password} onChange={this.handleInputChange} variant="outlined" />

            </Grid>
                <input className="btn-primary rounded mt-3 " type="submit" value="LOGIN" size="large" style={{height: '30px', width : '165px', marginLeft:'10%'}}/>
        </form>
    )}
}   
