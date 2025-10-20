import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import Alumnos from './Alumnos';

export default class Cursos extends Component {

    urlCursos = Global.urlCursos;
    urlAlumnos = Global.urlAlumnos;

    selectCursos = React.createRef();

    state = {
        cursos: [],
        alumnos: [],
        alumno: null
    }

    loadCursos = () => {
        axios.get(this.urlCursos).then(response => {
            this.setState({
                cursos: response.data
            })
        })
    }

    loadAlumnosCurso = (e) => {
        e.preventDefault();
        let curso = this.selectCursos.current.value;
        let request = "FiltrarCurso/" + curso;
        axios.get(this.urlAlumnos + request).then(response => {
            this.setState({
                alumnos: response.data
            })
        })
    }

    searchAlumno = (alumno) => {
        let request = "FindAlumno/" + alumno.idAlumno;
        axios.get(this.urlAlumnos + request).then(response => {
            this.setState({
                alumno: response.data
            })
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
            this.state.alumno != null &&
            <div>
                <h3>{this.state.alumno.nombre} {this.state.alumno.apellidos}</h3>
                <h3>idAlumno: {this.state.alumno.idAlumno}</h3>
                <img src={this.state.alumno.imagen} width='300px' height='250px'></img>
            </div>     
        }
        
        <select onChange={this.loadAlumnosCurso} ref={this.selectCursos}>
            {
                this.state.cursos.map((curso, index) => {
                    return(<option key={index} value={curso}>{curso}</option>)
                })
            }
        </select>
        <ul>
            {
                this.state.alumnos.map((alumno, index) => {
                    return(<Alumnos key={alumno.idAlumno} alumno={alumno} searchAlumno={this.searchAlumno}/>)
                })
            }
        </ul>
      </div>
    )
  }
}
