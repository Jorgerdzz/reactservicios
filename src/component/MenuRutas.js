import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/tabla/21'>Tabla Multiplicar 21</a></li> 
            <li><a href='/tabla/7'>Tabla Multiplicar 7</a></li> 
            <li><a href='/tabla/33'>Tabla Multiplicar 33</a></li> 
            <li><a href='/collatz/16'>Conjetura Collatz 16</a></li>
            <li><a href='/collatz/38'>Conjetura Collatz 38</a></li>
        </ul>
      </div>
    )
  }
}
