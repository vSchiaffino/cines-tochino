import React, { Component } from 'react'
import FuncionesFiltradas from './style'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class FuncionesFiltradasContent extends Component {
    static propTypes = {
        funciones: PropTypes.object.isRequired
    }

    render() {
        return (
            <>
                <FuncionesFiltradas funciones={this.filtrarFunciones()}/>
            </>
        )
    }

    filtrarFunciones() {
        let funciones = [...this.props.funciones];
        let filtro = this.props.filtro
        let filtraFecha = filtro.fecha !== ""
        let filtraFormatos = filtro.formatos.length > 0
        let filtraHora = filtro.hora !== ''
                        
        if(filtraFecha || filtraFormatos || filtraHora){
            funciones = funciones.filter(f => {
                let pasa = true
                f.fechavalue = new Date(f.fecha)
                if(filtraFormatos && !filtro.formatos.includes(f.formato)) pasa = false
                if(filtraFecha){
                    let tiempoFiltro = filtro.fecha.getTime()
                    let tiempoFuncion = f.fechavalue.getTime()
                    if(tiempoFiltro !== tiempoFuncion){
                        pasa = false
                    }
                    else if(filtraHora){
                        if(filtro.hora !== f.hora) pasa = false;
                    } 
                }
                
                
                return pasa
            })
        }
        return funciones;
    }
}

let mapStateToProps = (state) => ({
    filtro: state.filtroFunciones
})

export default connect(mapStateToProps)(FuncionesFiltradasContent)
