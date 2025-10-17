
import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class ServiceApiSuppliers extends Component {

    url = Global.urlNorthwind;

    state = {
        proveedores: [],
        proveedor: null
    }

    id = React.createRef();

    loadSupplier = () => {
        let request = "Suppliers";
        axios.get(this.url + request).then(response => {
            let proveedores = response.data.value;
            this.setState({
                proveedores: proveedores
            })
        })
    }

    buscarProveedorPorID = (e) => {
        e.preventDefault();
        let id = this.id.current.value;
        this.state.proveedores.map((proveedor, index) => {
            let supplierID = parseInt(proveedor.SupplierID);
            if(supplierID == id){
                this.setState({
                    proveedor: proveedor
                })
            }
        }) 
    }

    componentDidMount = () => {
        this.loadSupplier();
    }

  render() {
    return (
      <div>
        <h1>ServiceApiSuppliers</h1>
        <ul>
            {
                this.state.proveedores.map((proveedores, index) => {
                    return(<li key={index}>ID:{proveedores.SupplierID} / Nombre de contacto: {proveedores.ContactName}</li>)
                })
            }
        </ul>
        <form onSubmit={this.buscarProveedorPorID}>
            <label>Introduzca ID: </label>
            <input type='number' ref={this.id}></input>
            <button>Buscar proveedor por ID</button>
        </form>
        {
            this.state.proveedor == null ?
            <h3>No se ha realizado la busqueda</h3>:
            <ul>
                <li style={{color: "blue"}}>Nombre contacto: {this.state.proveedor.ContactName}</li>
                <li style={{color: "blue"}}>Compañía: {this.state.proveedor.CompanyName}</li>
                <li style={{color: "blue"}}>Dirección: {this.state.proveedor.Address}</li>
            </ul>
        }
        
      </div>
    )
  }
}
