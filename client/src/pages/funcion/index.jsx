import React, { Component } from "react";
import PropTypes from "prop-types";
import PeliculaContent from "../../components/pelicula";
import { Grid, TextField } from "@material-ui/core";
import CategoryIcon from '@material-ui/icons/Category';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

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
                    {/* <PeliculaContent id={3} className=""/> */}
                    <Grid spacing={5} className="mt-4" container justify='center' alignContent='center' alignItems='center'>
                        <Grid className="bg-light rounded border mr-1" item xs={12} md={5} lg={5}>
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
                        </Grid>
                        <Grid className="bg-light rounded border ml-1" item xs={12} md={5} lg={5} >
                            <p className="m-2 text-primary h3">Opciones</p>
                            <hr className="mt-0"/>
                            <TextField variant='outlined' label="" placeholder=""/>
                        </Grid>
                    </Grid>
                </div>
            </>
    );
}
}
