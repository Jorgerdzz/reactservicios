
import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class EmpleadosDepartamentov2 extends Component {
    urlDepartamentos =  Global.urlDepartamentos;
    urlEmpleados = Global.urlEmpleados;

    selectDepartamento = React.createRef();

    state = {
        departamentos: [],
        empleadosDepartamento: []
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(this.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    loadEmpleadosDepartamento = (e) => {
        e.preventDefault();
        let id = this.selectDepartamento.current.value
        let request = "api/Empleados/EmpleadosDepartamento/" + id;
        axios.get(this.urlEmpleados + request).then(response => {
            this.setState({
                empleadosDepartamento: response.data
            })
        })
    }

    componentDidMount = () => {
      this.loadDepartamentos();
    }
    


  render() {
    return (
      <div>
        <h1>EmpleadosDepartamento</h1>
        <form onSubmit={this.loadEmpleadosDepartamento}>
            <label>Seleccione departamento:</label>
            <select ref={this.selectDepartamento}>
              {
                this.state.departamentos.map((dept, index) => {
                  return(
                    <option key={index} value={dept.numero}>{dept.nombre}</option>
                  )
                })
              }
            </select>
            <button>Buscar empleados</button>
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
