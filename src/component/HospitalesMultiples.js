import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios';

export default class HospitalesMultiples extends Component {

    url = Global.urlEjemplos;

    selectMultiple = React.createRef();
    cajaincremento = React.createElement();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = () => {
        let request = "api/Hospitales";
        axios.get(this.url + request).then(response=>{
            this.setState({
                hospitales: response.data
            })
        })
    }

    getHospitales = (e) => {
        e.preventDefault();
        let options = this.selectMultiple.current.options;
        let aux = [];
        for(let option of options){
            console.log(option)
            if(option.selected){
                aux.push(option.value);
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    updateSalarios = () => {
        let incremento = this.cajaincremento.current.value;
        let cadena = "";
        for(let id of this.state.hospitalesSeleccionados){
            cadena += "&idhospital=" + id;
        }
        let cadenaIncremento = "?incremento=" + incremento
        let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales" + cadenaIncremento + cadena
        axios.put(this.url + request).then(response => {
            console.log("Modificado")
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }


  render() {
    return (
      <div>
        <h1>HospitalesMultiples</h1>
        <form>
                <select multiple ref={this.selectMultiple} className='form-control' size={8}>
                    {
                        this.state.hospitales.map((hospital, index) => {
                            return(
                                <option key={index} value={hospital.idHospital}>{hospital.nombre}</option>
                            )
                        })
                    }
                </select><br></br>
                <label>Introduzca incremento:</label>
                <input type='number' ref={this.cajaincremento} className='form-control'></input><br></br>
                <button className='btn btn-primary' onClick={this.updateSalarios}>Incrementar salarios</button><br></br>
                <button className='btn btn-primary' onClick={this.getHospitales}>Buscar trabajadores</button>
        </form>
        {
            this.state.hospitalesSeleccionados.length != 0 &&
            <Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>
        }
        
      </div>
    )
  }
}
