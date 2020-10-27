import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, MenuItem } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'


export default class FiltroFunciones extends Component {
    static propTypes = {
        formatos: PropTypes.arrayOf(PropTypes.object),
        fechas: PropTypes.arrayOf(PropTypes.object),
        horas: PropTypes.arrayOf(PropTypes.object),
    }

    render() {
        return (
            <>
                <p class="mb-3 h3">Elegí cómo queres ver tu película:</p>
                <hr/>
                <Grid container
                  spacing={2}
                  alignItems='center'
                  alignContent='center'
                  justify="center">
                    {/* Formatos */}
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        <Autocomplete
                        multiple
                        onChange={(e, value) => {this.cambioFiltro("formatos", value)}}
                        options={this.props.formatos}
                        getOptionLabel={(opt) => (opt)}
                        defaultValue={[]}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            className="mb-3 w-100"
                            variant="outlined"
                            label="Formato"
                            placeholder="Elegí el formato (3D, 2D, etc)"
                            />
                        )} />
                    </Grid>
                    {/* Fecha */}
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        <TextField 
                            select
                            label="Fecha"
                            className="mb-3 w-100"
                            value={this.state.filtrosFunciones.fecha}
                            onChange={(e, value) => (this.cambioFiltro("fecha", e.target.value))}
                            variant="outlined">
                            {this.props.fechas.map(f => (
                                <MenuItem key={f.value} value={f.value}>{f.label}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* Horario */}
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        <TextField 
                            select
                            className="mb-3 w-100"
                            label="Horario"
                            disabled={this.state.filtrosFunciones.fecha && this.state.filtrosFunciones.fecha !== ''}
                            value={this.state.filtrosFunciones.hora}
                            onChange={(e, value) => (this.cambioFiltro("hora", e.target.value))}
                            variant="outlined">
                            {this.props.horas[this.state.filtrosFunciones.fecha].map(h => (
                                    <MenuItem key={h.value} value={h.value}>{h.label}</MenuItem>
                                ))}
                        </TextField>
                    </Grid>
                </Grid>
            </>
        )
    }
}
