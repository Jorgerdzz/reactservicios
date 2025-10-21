import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tabla/21">Tabla Multiplicar 21</NavLink></li> 
            <li><NavLink to="/tabla/7">Tabla Multiplicar 7</NavLink></li> 
            <li><NavLink to="/tabla/33">Tabla Multiplicar 33</NavLink></li> 
            <li><NavLink to="/collatz/16">Conjetura Collatz 16</NavLink></li>
            <li><NavLink to="/collatz/38">Conjetura Collatz 38</NavLink></li>
        </ul>
      </div>
    )
  }
}
