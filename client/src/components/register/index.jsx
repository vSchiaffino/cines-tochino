import React, {Component} from 'react';
import { Grid, TextField } from '@material-ui/core'
import { request } from '../../components/helpers/request'
import qs from 'qs'


export default class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user: '',
            password: '',
            confirmPassword:'',
            mail:'', 
            errorReporter:false,
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
        
        const { name, user, password, confirmPassword, mail} = this.state;
        if (password === confirmPassword)
        {
            try {
                let res = await request('post', `users`,{'Content-Type': 'application/x-www-form-urlencoded'}, qs.stringify({nombre: name, usuario: user, contrasena: password, mail: mail}));
                console.log(res);
            } catch (error) {
                console.log(error);
            }
            
        }   
        else{
            this.setState({errorReporter:true}); 
        }
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                <Grid item>    

                    <TextField className="ml-3 h3 pt-2" name="name" label="Nombre"  value={this.state.name} onChange={this.handleInputChange} variant="outlined" />
                </Grid>
                <Grid item>    

                    <TextField className="ml-3 h3 pt-2" name="user" label="Nombre de usuario"  value={this.state.user} onChange={this.handleInputChange} variant="outlined" />
                </Grid>
                
                <Grid item>

                    <TextField className="ml-3 h3 pt-2" name="password" label="Contraseña"  value={this.state.password} onChange={this.handleInputChange} variant="outlined" />

                </Grid>
                <Grid item>

                    <TextField className="ml-3 h3 pt-2" name="confirmPassword" label="Confirmar Contraseña"  value={this.state.confirmPassword} onChange={this.handleInputChange} variant="outlined" />
                </Grid>
                <Grid item>

                    <TextField className="ml-3 h3 pt-2" name="mail" label="Email"  value={this.state.mail} onChange={this.handleInputChange} variant="outlined" />

                </Grid>
                    <input className="btn-primary rounded mt-3" type="submit" value="Register" size="large" style={{height: '50px', width : '225px', marginLeft:'3%'}}/>
            </form>
    )}
}   