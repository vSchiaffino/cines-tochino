import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { TextField, MenuItem } from "@material-ui/core"
import { elegirCategoria } from '../../redux/actions'
// import { dispatch } from 'react-redux'

class Buscador extends Component {
    constructor(props) {
        super(props)
    }

    handleCategoriasChange(e) {
        this.setState({...this.state, categoria: e.target.value})
        this.props.dispatchCategoria(e.target.value)
    }

    render() {
        return (
            <>
                {/* Categorias */}
                <TextField 
                    select
                    label="Categorias"
                    value={this.props.categoria}
                    onChange={(e) => this.handleCategoriasChange(e)}
                    variant="outlined">
                    {this.props.categorias.map(c => (
                        <MenuItem value={c.id} key={c.id}>
                            {c.nombre}
                        </MenuItem>
                    ))}
                </TextField>
                {/* Seleccionar peliculas */}
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchCategoria: idcategoria => dispatch(elegirCategoria(idcategoria))
})

const mapStateToProps = state => ({
    categoria: state.idcategoria
})

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
