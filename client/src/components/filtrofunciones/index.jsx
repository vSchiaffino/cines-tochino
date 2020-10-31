import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FiltroFunciones from './style'

export default class FiltroFuncionesContent extends Component {
    static propTypes = {
        funciones: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        let {formatos, fechas, horas} = this.separarDatosFunciones(this.props.funciones)
        this.formatos = formatos
        this.fechas = fechas
        this.horas = horas
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
                let days = {
                    0: 'Domingo',
                    1: 'Lunes',
                    2: 'Martes',
                    3: 'Miercoles',
                    4: 'Jueves',
                    5: 'Viernes',
                    6: 'Sabado',
                }
                let dia = days[fechavalue.getDay()]
                fechas.push({label: dia + " " + fechavalue.toLocaleDateString(), value: fechavalue})
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

    render() {
        return (
            <FiltroFunciones 
              formatos={this.formatos}
              fechas={this.fechas}
              horas={this.horas} />
        )
    }
}
