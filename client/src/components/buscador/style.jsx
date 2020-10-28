import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"

import { elegirFiltroPeliculas } from '../../redux/actions'
// import { dispatch } from 'react-redux'

class Buscador extends Component {
    static propTypes = {
        dataPeliculas: PropTypes.arrayOf(PropTypes.object).isRequired,
        dataCategorias: PropTypes.arrayOf(PropTypes.object).isRequired,
        dataActores: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    handleFiltroChange(campo, value) {
        this.props.dispatchFiltro({...this.props.filtro, [campo]: value})
    }

    render() {
        return (
            <>
                {/* Peliculas */}
                <Autocomplete
                    onChange={(e, value) => this.handleFiltroChange("pelicula", value ? value.id : 0 )}
                    options={this.props.dataPeliculas}
                    getOptionLabel={(opt) => opt.titulo}
                    defaultValue={0}
                    renderInput={(params) => (
                        <TextField
                          {...params}
                          className="mb-3"
                          variant="outlined"
                          label="Pelicula"
                          placeholder="Elegí la pelicula"
                        />
                      )}>
                </Autocomplete>
                {/* Categorias */}
                <Autocomplete
                    multiple
                    onChange={(e, value) => this.handleFiltroChange("categorias", value.map(v => v.id))}
                    options={this.props.dataCategorias}
                    getOptionLabel={(opt) => opt.nombre}
                    defaultValue={[]}
                    renderInput={(params) => (
                        <TextField
                          {...params}
                          className="mb-3"
                          variant="outlined"
                          label="Categorias"
                          placeholder="Elegí las categorias"
                        />
                      )}>
                </Autocomplete>
                {/* Actores */}
                <Autocomplete 
                    multiple
                    onChange={(e, value) => this.handleFiltroChange("actores", value.map(v => v.id))}
                    options={this.props.dataActores}
                    getOptionLabel={(opt) => opt.nombre}
                    defaultValue={[]}
                    renderInput={(params) => (
                        <TextField
                          {...params}
                          className="mb-3"
                          variant="outlined"
                          label="Actores"
                          placeholder="Elegí los actores"
                        />
                      )}>
                </Autocomplete>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchFiltro: (filtro) => dispatch(elegirFiltroPeliculas(filtro))
})

const mapStateToProps = state => ({
    filtro: state.filtroPeliculas
})

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)