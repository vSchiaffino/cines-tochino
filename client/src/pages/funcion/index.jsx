import React, { Component } from "react";
import PropTypes from "prop-types";
import PeliculaContent from "../../components/pelicula";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import CategoryIcon from '@material-ui/icons/Category';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default class Funcion extends Component {
    static propTypes = {
        match: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <Grid spacing={3} className="mt-4" container justify='center' alignContent='center' alignItems='center'>
                        <PeliculaContent hideData id={3} className=""/>
                        <Grid item xs={12} md={5} lg={5}>
                            <div className="bg-light rounded border">
                                <p className="m-2 text-primary h3">Datos de la función</p>
                                <hr className="mt-0"/>
                                <div className="container">
                                    <Grid container justify='center' alignContent='center' alignItems='center'>
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
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    
                    
                    <Grid container className="mt-4" container justify='center' alignContent='center' alignItems='center'>
                        <div className="bg-light rounded border">
                            <p className="m-2 text-primary h3">Elegir asientos</p>
                            <hr className="mt-0"/>
                            <Grid xs={12} container justify='center' alignContent='center' alignItems='center'>
                                <Grid item xs={10} md={10} lg={10}>
                                    <TextField
                                        className='w-100'
                                        variant='outlined'
                                        label="Butacas requeridas"
                                        placeholder="Selecciona la cantidad de asientos"
                                        InputProps={{
                                            inputMode: 'numeric',
                                            pattern: '[0-9]*',
                                            startAdornment: (
                                                <IconButton position="start" onClick={() => console.log("menos") }>
                                                    <RemoveIcon />
                                                </IconButton>
                                            ),
                                            endAdornment: (
                                                <IconButton position="end"  onClick={() => console.log("mas") }>
                                                    <AddIcon />
                                                </IconButton>
                                            )
                                        }}  />

                                </Grid>
                            </Grid>
                            
                        </div>
                    </Grid>
                
                </div>
                
            </>
    );
}
}
