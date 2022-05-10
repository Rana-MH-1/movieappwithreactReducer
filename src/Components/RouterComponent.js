import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Routers, Route, Routes, useNavigate } from 'react-router-dom'
import App from '../App'
import MovieDetails from './MovieDetails'

function RouterComponent() {
    let [dataMovie, setDataMovie] = useState([])
  const getDataMovie = async()=>{
    try{
        const {data} = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
        setDataMovie(data)
        console.log(data)
    }
    catch(e){console.log(e)  }
  }
  useEffect(()=>{
    getDataMovie()

  },[])
  return (
    <Routers>
        <Routes>
            <Route path='/' exact element={<App dataMovie={dataMovie} />}></Route>
            <Route path='/movie/:id' element={<MovieDetails dataMovie={dataMovie} />} />
           
        </Routes>
    
    </Routers>
  )
}

export default RouterComponent