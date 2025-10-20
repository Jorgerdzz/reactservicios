import React, { Component } from 'react'

export default class Alumnos extends Component {

    infoAlumno = () => {
        this.props.searchAlumno(this.props.alumno);
    }

  render() {
    return (
      <div>
        <li>{this.props.alumno.nombre} {this.props.alumno.apellidos}</li>
        <button onClick={this.infoAlumno}>Detalles</button>
      </div>
    )
  }
}
