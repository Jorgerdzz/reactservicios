import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement() {
        let {minumero} = useParams();
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
