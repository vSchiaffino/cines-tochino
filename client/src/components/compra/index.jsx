import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryIcon from '@material-ui/icons/Category';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { Grid} from "@material-ui/core";

export default class DetallesCompra extends Component {
    constructor(props){
        super(props);
        this.state = {
            comprado:false

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState({...this.state, comprado:true})
    }


    render(){
        return(
            <>
            <div className=" shadow container">
                                    <Grid container justify='center ' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <CategoryIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Formato:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>3d</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <TodayIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Fecha:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>18/11/2001</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <QueryBuilderIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Hora:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>18:00</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <AttachMoneyIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Precio:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>$50</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <MeetingRoomIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Sala:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>h3</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
                                        <Grid xs={1} item className="text-center">
                                                <EventSeatIcon fontSize='large' className="" />
                                        </Grid>
                                        <Grid xs={5} item className="border-right border-primary text-center">
                                                Asientos:
                                        </Grid>
                                        <Grid xs={6} item className='text-center'>
                                            <b>c5, c4</b>
                                        </Grid>
                                    </Grid>
                                    <hr/>
                                </div>

                                <hr></hr>
                                <Grid className="media mb-3" container justify="center" alignItems="center" alignContent="center">
                                    <Grid  className="container flex-column mb-3 " item container lg={5} sm={8}  xs={10} md={6} justify="center">
                                            <button className="btn btn-primary rounded shadow" onClick={this.handleClick} disabled={this.state.comprado}> Comprar </button>
                                            
                                    </Grid>
                                    {this.state.comprado ? <a className="text-success" style={{marginLeft:"5%"}} href="/reservas">Gracias por tu compra, puede tocar aquí para ver tus reservas</a> : <></> }
                                    
                                </Grid>
                        </>
        )
    }

}