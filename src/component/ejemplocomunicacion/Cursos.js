import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import Alumnos from './Alumnos';

export default class Cursos extends Component {

    urlEjemplos = Global.urlEjemplos;

    selectCursos = React.createRef();

    state = {
        cursos: [],
        idCurso: 0,
        alumnoSeleccionado: null
    }

    loadCursos = () => {
        let request = "api/Alumnos/Cursos";
        axios.get(this.urlEjemplos + request).then(response => {
            this.setState({
                cursos: response.data
            })
        })
    }

    mostrarAlumnos = (e) => {
        e.preventDefault();
        let idCurso = this.selectCursos.current.value;
        this.setState({
            idCurso: idCurso
        })
    }

    seleccionarAlumno = (alumno) => {
        this.setState({
            alumnoSeleccionado: alumno
        })
        
        
    }

    componentDidMount = () => {
        this.loadCursos();
    }

  render() {
    return (
      <div>
        <h1>SELECCIONE CURSO</h1>
        {
            this.state.alumnoSeleccionado != null &&
            <div>
                <h3>{this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}</h3>
                <h3>idAlumno: {this.state.alumnoSeleccionado.idAlumno}</h3>
                <img src={this.state.alumnoSeleccionado.imagen} width='300px' height='250px'></img>
            </div>     
        }
        
        <form>
            <select onChange={this.mostrarAlumnos} ref={this.selectCursos}>
                {
                    this.state.cursos.map((curso, index) => {
                        return(<option key={index} value={curso}>{curso}</option>)
                    })
                }
            </select>
        </form>
            {
                this.state.idCurso != 0 &&
                <Alumnos idcurso={this.state.idCurso} seleccionarAlumno={this.seleccionarAlumno}/>
            }
      </div>
    )
  }
}
