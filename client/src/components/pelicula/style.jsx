import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'


export default class Pelicula extends Component {
    static propTypes = {
        pelicula: PropTypes.object.isRequired,
        hideData: PropTypes.bool
    }

    render() {
        let mdSize = 10
        let lgSize = 6
        let smSize = 12
        return (
            this.props.hideData === true ? 
                <Grid item xs={12} md={6}><img class="img-thumbnail rounded float-left"  alt={`Imagen de la pelicula ${this.props.pelicula.titulo}`} src={this.props.pelicula.img} /></Grid>
            :
            <Grid 
              container
              spacing={2}
              alignItems='center'
              alignContent='center'
              justify="center">
                <Grid   
                    item
                    lg={lgSize}
                    md={mdSize}
                    xs={smSize}
                    alignItems='center'
                >
                    <img class="img-thumbnail rounded float-left"  alt={`Imagen de la pelicula ${this.props.pelicula.titulo}`} src={this.props.pelicula.img} />
                </Grid>
                {this.props.hideData !== true && 
                <Grid
                  item
                  lg={lgSize}
                  md={mdSize}
                  xs={smSize}
                  alignItems='center'
                  alignContent='center'
                  justify='center'>     
                    <div className="card rounded bg-light ">
                        <div class="card-body">
                            <h4 class="card-title">{this.props.pelicula.titulo}</h4>
                            <p class="card-text sinopsis">{this.props.pelicula.sinopsis}</p>
                            <hr/>
                            <p className="card-text">Duracion: 123m //TODO</p>
                            <hr/>
                            <p className="card-text">Fecha de estreno: {this.props.pelicula.estreno}</p>
                            <hr/>
                            <p className="card-text">Actores: {/*TODOthis.props.actores.join(" ")*/}TODO</p>
                            <hr/>
                            <p className="card-text">Director: {this.props.pelicula.director}</p>
                        </div>
                    </div>
                </Grid>
}
            </Grid>
        )
    }
}
