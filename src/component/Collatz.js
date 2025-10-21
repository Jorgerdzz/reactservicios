import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        collatz: []
    }

    conjeturaCollatz = () => {
        let numero = parseInt(this.props.numero);
        let aux = [];
        while(numero!=1){
            if(numero % 2 == 0){
                let resultado = numero / 2;
                aux.push(resultado);
                numero = resultado
            }else{
                let resultado = (numero * 3) + 1;
                aux.push(resultado);
                numero = resultado
            }
        }
        this.setState({
            collatz: aux
        })
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero){
            this.conjeturaCollatz();
        }
    }

    componentDidMount = () => {
        this.conjeturaCollatz();
    }

  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <ul>
            {
                this.state.collatz.map((num, index) => {
                    return(<li key={index}>{num}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
