import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FiltroFunciones from './style'
import { request } from '../helpers/request'


export default class FiltroFuncionesContent extends Component {
    static propTypes = {
        idfuncion: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            formatos: null,
            fechas: null,
            horas: null
        }
    }

    separarDatosFunciones(funciones) {
        let horasYaPuestas = {}
        let fechasYaPuestas = [ ]
        let formatos = []
        let fechas = []
        let horas = {}
        funciones.forEach(f => {
            // Formatos
            let fechavalue = new Date(f.fecha)
            if (!formatos.includes(f.formato)) formatos.push(f.formato)
            // Fechas
            if (!fechasYaPuestas.includes(f.fecha)){
                fechasYaPuestas.push(f.fecha)
                // TODO dia de la semana
                fechas.push({label: fechavalue.toLocaleDateString(), value: fechavalue})
            } 
            // Horarios
            if(!horas.hasOwnProperty(fechavalue)) {
                horas[fechavalue] = []
                horasYaPuestas[fechavalue] = []
            }
            if(!horasYaPuestas[fechavalue].includes(f.hora)){
                horas[fechavalue].push({label: f.hora, value: f.hora})
                horasYaPuestas[fechavalue].push(f.hora)
            }
                
        })
        return {formatos, fechas, horas}
    }

    async componentDidMount() {
        try {
            let data = await request('get', `prefuncion/${this.id}`)
            let funciones = data.data.funciones;
            let {formatos, fechas, horas} = this.separarDatosFunciones(funciones)
            this.setState({...this.state, formatos, fechas, horas})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <FiltroFunciones 
              formatos={this.state.formatos}
              fechas={this.state.fechas}
              horas={this.state.horas} />
        )
    }
}
