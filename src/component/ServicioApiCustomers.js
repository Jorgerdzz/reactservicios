import { Component } from "react";
import axios from "axios";

class ServicioApiCustomers extends Component {

    state = {
        customers: []
    }

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/customers"

    //Creamos método para cargar clientes
    loadCustomers = () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(response => {
            console.log(response.data);
            this.setState({
                customers: response.data.value
            })

        })
        console.log("Después del servicio")
    }

    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
    }

    render(){
        return(
            <div>
                <h1>Servicio Api Customers</h1>
                <button>Load Customers</button>
                {
                    this.state.customers.map((cliente, index)=> {
                        return(<h3 style={{color: "blue"}}>{cliente.ContactName}</h3>)
                    })
                }
            </div>
        )
    }
}

export default ServicioApiCustomers;