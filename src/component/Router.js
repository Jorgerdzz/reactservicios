import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import Collatz from './Collatz'

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement() {
        let {minumero} = useParams();
        return <TablaMultiplicar numero={minumero}/>
    }

    function ConjeturaCollatz() {
        let {numero} = useParams();
        return <Collatz numero={numero}/>
    }

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />}/>
        <Route path='/collatz/:numero' element={<ConjeturaCollatz />}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
