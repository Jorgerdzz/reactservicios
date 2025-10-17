
import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class EmpleadosDepartamento extends Component {
    url =  Global.urlEmpleados;

    cajaId = React.createRef();

    state = {
        empleadosDepartamento: []
    }

    loadEmpleadosDepartamento = (e) => {
        e.preventDefault();
        let id = this.cajaId.current.value
        let request = "api/Empleados/EmpleadosDepartamento/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                empleadosDepartamento: response.data
            })
        })
    }

    


  render() {
    return (
      <div>
        <h1>EmpleadosDepartamento</h1>
        <form onSubmit={this.loadEmpleadosDepartamento}>
            <label>Introduzca ID Departamento:</label>
            <input type='number' ref={this.cajaId}></input>
            <button>Buscar</button>
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>APELLIDO</th>
                    <th>OFICIO</th>
                    <th>SALARIO</th>
                </tr>
            </thead>
            <tbody></tbody>
            {
                this.state.empleadosDepartamento.map((empleados, index) => {
                    return(
                        <tr>
                            <td>{empleados.idEmpleado}</td>
                            <td>{empleados.apellido}</td>
                            <td>{empleados.oficio}</td>
                            <td>{empleados.salario}</td>
                        </tr>
                    )
                })
            }
        </table>
      </div>
    )
  }
}
