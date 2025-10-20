
import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {
    urlDepartamentos = Global.urlDepartamentos;
    urlEmpleados = Global.urlEmpleados;

    state = {
        departamentos: [],
        idDepartamento: 0
    }

    selectDepartamento = React.createRef();

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(this.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    searchEmpleados = (e) => {
        e.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        this.setState({
            idDepartamento: idDepartamento
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form onSubmit={this.searchEmpleados}>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((dept, index) => {
                        return(<option key={index} value={dept.numero}>{dept.nombre}</option>)
                    })
                }
            </select>
            <button>Buscar empleados</button>
        </form>
        {
            this.state.idDepartamento =! 0 &&
            <Empleados idDepartamento={this.state.idDepartamento}/>
        }
        
      </div>
    )
  }
}
