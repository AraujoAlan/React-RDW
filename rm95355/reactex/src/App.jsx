import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carros from './components/Carros/Carros'
import Carteirinha from './components/Carteirinhas/Carteirinhas'
import Menu from './components/Menu/Menu'
import Semaforo from './components/Semaforo/Semaforo'

export default function App() {

    const listaDeCarros = ['Carro1','Carro2','Carro3','Carro4','Carro5','Carro6','Carro7','Carro8','Carro9','Carro10']

  return (

    <>
        <h1>1TDSR - Alan Araujo Soares - RM95355</h1>

        <Menu/>
        <Routes>

            <Route path='/Carros' element={<Carros listaCarrosProps={listaDeCarros} />} />
            <Route path='/Semaforo' element={<Semaforo/>}/>
            <Route path='/Carteirinha' element={<Carteirinha/>} />

        </Routes>
    </>
  )
}
