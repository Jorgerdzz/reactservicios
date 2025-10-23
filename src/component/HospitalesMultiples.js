import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios';

export default class HospitalesMultiples extends Component {

    url = Global.urlEjemplos;

    selectMultiple = React.createRef();
    cajaincremento = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
    }

    loadHospitales = () => {
        let request = "api/Hospitales";
        axios.get(this.url + request).then(response=>{
            this.setState({
                hospitales: response.data
            })
        })
    }

    getSeleccion = () => {
        let options = this.selectMultiple.current.options;
        let aux = [];
        for(let option of options){
            console.log(option)
            if(option.selected){
                aux.push(option.value);
            }
        }
        return aux;
    }

    getHospitales = (e) => {
        e.preventDefault();
        this.setState({
            hospitalesSeleccionados: this.getSeleccion()
        })
    }

    updateSalarios = (e) => {
        e.preventDefault();
        let idhospitales = this.getSeleccion();
        let incremento = this.cajaincremento.current.value;
        let cadena = "";
        for(let id of idhospitales){
            cadena += "&idhospital=" + id;
        }
        console.log(cadena)
        let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" + incremento + cadena
        console.log(request);
        axios.put(this.url + request).then(response=>{
            console.log("Actualizado")
            this.setState({
                hospitalesSeleccionados: idhospitales
            })
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
                <button onClick={this.updateSalarios} className='btn btn-primary'>Incrementar salario</button>
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
