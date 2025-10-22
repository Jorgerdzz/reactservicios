import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Trabajadores extends Component {

    url = Global.urlEjemplos;

    state = {
        trabajadores: [],
        mensaje: ""
    }

    loadTrabajadores = () => {
        let idHospitales = this.props.idhospitales
        let data = ""
        for( let id of idHospitales){
            data += "idhospital=" + id + "&";
        }
        data = data.substring(0, data.length-1);
        this.setState({
            mensaje: data
        })
        let request = "api/Trabajadores/TrabajadoresHospitales?" + data;
        axios.get(this.url + request).then(response=>{
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospitales != this.props.idhospitales){
            this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <h1>Trabajadores</h1>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <td>ID EMPLEADO</td>
                    <td>APELLIDO</td>
                    <td>OFICIO</td>
                    <td>SALARIO</td>
                    <td>ID HOSPITAL</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((trabajador, index)=>{
                        return(
                            <tr key={index}>
                                <td>{trabajador.idTrabajador}</td>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario}</td>
                                <td>{trabajador.idHospital}</td>
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
