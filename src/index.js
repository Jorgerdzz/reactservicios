import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from './component/ServicioApiCustomers';
import ServiceApiSuppliers from './component/ServiceApiSuppliers';
import EmpleadosDepartamento from './component/EmpleadosDepartamento';
import EmpleadosDepartamentov2 from './component/EmpleadosDepartamentov2';
import EmpleadosOficios from './component/EmpleadosOficios';
import Departamentos from './component/maestrodetalle/Departamentos';
import Cursos from './component/ejemplocomunicacion/Cursos';
import TablaMultiplicar from './component/TablaMultiplicar';
import Router from './component/Router';
import MenuRutas from './component/MenuRutas';
import HospitalesMultiples from './component/HospitalesMultiples';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<ServicioApiCustomers />
  //<ServiceApiSuppliers />
  //<EmpleadosDepartamento />
  //<EmpleadosDepartamentov2 />
  //<EmpleadosOficios />
  //<Departamentos />
  //<Cursos />
  //<TablaMultiplicar numero="7" />
  <div style={{margin: "auto", width: "50%"}}>
    <HospitalesMultiples />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
