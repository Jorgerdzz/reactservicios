import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';

export default class Alumnos extends Component {

  urlEjemplos = Global.urlEjemplos

  state = {
    alumnos: []
  }

  loadAlumnos = () => {
    let request = "api/Alumnos/FiltrarCurso/" + this.props.idcurso
    axios.get(this.urlEjemplos + request).then(response => {
      this.setState({
        alumnos: response.data
      })
    })
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.idcurso != this.props.idcurso){
      this.loadAlumnos();
    }
  }

  componentDidMount = () => {
    this.loadAlumnos();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.alumnos.map((alumno, index) => {
              return(<li key={index}>{alumno.nombre} {alumno.apellidos}
              <button onClick={ () => {
                this.props.seleccionarAlumno(alumno);
              }}>
                Detalles
                </button></li>)
            })
          }
        </ul>
      </div>
    )
  }
}
