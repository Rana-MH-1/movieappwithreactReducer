
import axios from 'axios';
import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './App.css';
import MovieCard from './Components/MovieCard';

function App({dataMovie}) {
  
  
  return (
    <div className="App">
      <MovieCard data={dataMovie}/>
  
    </div>
  );
}

export default App;
