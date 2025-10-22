import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios';

export default class HospitalesMultiples extends Component {

    url = Global.urlEjemplos;

    selectMultiple = React.createRef();

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
                </select>
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
