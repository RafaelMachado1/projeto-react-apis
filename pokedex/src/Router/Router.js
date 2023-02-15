import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import PokedexPage from '../pages/PokedexPage'
import PokemonDetalhePage from '../pages/PokemonDetalhePage'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<HomePage/>} />
            <Route path='/pokedex' element={<PokedexPage/>} />
            <Route path='/pokemon/detalhes/:namePokemon' element={<PokemonDetalhePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router