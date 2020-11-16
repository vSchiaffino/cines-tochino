import React, {Component} from 'react';
import { Grid } from '@material-ui/core'
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

                    <h3 className="font-weight-bold col-10" >  Nombre </h3>
                    <input className="ml-3 h3" type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.handleInputChange}></input>  
                </Grid>
                <Grid item>    

                    <h3 className="font-weight-bold col-10" >  Usuario</h3>  
                    <input className="ml-3 h3" type="text" name="user" placeholder="Nombre de usuario" value={this.state.user} onChange={this.handleInputChange}></input> 
                </Grid>
                
                <Grid item>

                    <h3 className="font-weight-bold col-10" > Contraseña </h3>
                    <input className="ml-3 h3" type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleInputChange}></input>

                </Grid>
                <Grid item>

                    <h3 className="font-weight-bold col-10" > Confirmar Contraseña </h3>
                    <input className="ml-3 h3" type="password" name="confirmPassword" placeholder="Confirmar Contraseña" value={this.state.confirmPassword} onChange={this.handleInputChange}></input>

                </Grid>
                <Grid item>

                    <h3 className="font-weight-bold col-10" > Email </h3>
                    <input className="ml-3 h3" type="text" name="mail" placeholder="ejemplo@gmail.com" value={this.state.mail} onChange={this.handleInputChange}></input>

                </Grid>
                    <input className="btn-primary rounded mt-3" type="submit" value="Register" size="large" style={{height: '50px', width : '170px', marginLeft:'12%'}}/>
            </form>
    )}
}   