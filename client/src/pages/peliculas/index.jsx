import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PeliculasContent from '../../components/content/peliculas'
import BuscadorContent from '../../components/content/buscador'
import { connect } from 'react-redux'

class Peliculas extends Component {
    // static propTypes = {
    //     categoriaElegida: PropTypes.number
    // }

    constructor(props){
        super(props)
    }

    render() {
        // console.log(this.props.categoriaElegida);
        return (
            <>
                <div className="jumbotron" key="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Estas son nuestras películas</h1>
                        <hr className="my-4" />
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" role="button" data-toggle="collapse" href="#buscador" aria-expanded="false" aria-controls="buscador">
                                Buscador 
                                <i className="fa fas fa-search ml-2" />
                            </a>
                        </p>
                        <div className="collapse multi-collapse" id="buscador">
                            <div className="card card-body">
                                <BuscadorContent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5" key="container">
                    <PeliculasContent />
                </div>

            </>
        )
    }
}

const mapStateToProps = state => ({
    categoriaElegida: state.categoriaElegida
})

export default connect(mapStateToProps, null)(Peliculas)
