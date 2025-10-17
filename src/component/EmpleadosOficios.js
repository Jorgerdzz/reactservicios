
import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class EmpleadosOficios extends Component {

    urlEmpleados = Global.urlEmpleados;

    state = {
        oficios: [],
        empleadosOficios: []
    }

    selectOficios = React.createRef();

    loadOficios = () => {
        let request = "api/Empleados";
        axios.get(this.urlEmpleados + request).then(response => {
            let empleados = response.data;
            let aux = new Set();
            empleados.map((empleado, index) => {
                let oficio = empleado.oficio
                aux.add(oficio)
            })
            aux = Array.from(aux)
            this.setState({
                oficios: aux
            })
        })
    }

    loadEmpleadosOficio = (e) => {
        e.preventDefault();
        let oficio = this.selectOficios.current.value;
        let request = "api/Empleados/EmpleadosOficio/" + oficio;
        axios.get(this.urlEmpleados + request).then(response => {
            let aux = []
            response.data.map((empleado, index) => {
                aux.push(empleado);
            })
            this.setState({
                empleadosOficios: aux
            })
        })
        
    }

    componentDidMount = () => {
        this.loadOficios();
    }

  render() {
    return (
      <div>
        <h1>EmpleadosOficios</h1>
        <form onSubmit={this.loadEmpleadosOficio}>
            <label>Seleccione oficio: </label>
            <select ref={this.selectOficios}>
                {
                    this.state.oficios.map((oficio, index) => {
                        console.log(oficio)
                        return(
                            <option key={index} value={oficio}>{oficio}</option>
                        )
                    })
                }
            </select>
            <button>Buscar empleados</button>
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>APELLIDO</th>
                    <th>OFICIO</th>
                    <th>SALARIO</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.empleadosOficios.map((empleado, index) => {
                        return(
                            <tr>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
