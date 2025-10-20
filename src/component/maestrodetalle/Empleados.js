import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {

    urlEmpleados = Global.urlEmpleados;

    state = {
        empleados: [],
        texto: "",
    }

    componentDidUpdate = (oldProps) =>{
        console.log("Current: " + this.props.idDepartamento);
        console.log("Old: " + oldProps.idDepartamento);
        if(this.props.idDepartamento != oldProps.idDepartamento){
            this.loadEmpleados();
        }
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.idDepartamento;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento
        axios.get(this.urlEmpleados + request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        console.log("Cargando componente");
        this.loadEmpleados();
    }

  render() {
    return (
      <div>
        <h1 style={{color: "Blue"}}>Empleados {this.props.idDepartamento}</h1>
        <h2>{this.state.texto}</h2>
        <ul>
            {
                this.state.empleados.map((empleado, index)=>{
                    return(<li key={index}>{empleado.apellido} - {empleado.oficio} - {empleado.departamento}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
