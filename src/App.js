import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import Home from './views/Home';
import Pokemons from './views/Pokemons'
import Details  from './views/Details';
import Mycontext from './Mycontext';

function App() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon"
  const [pokemons, setPokemons] = useState([])
 /** 
  * 
  *  @param {Number} limit
  *  @param {*} 
  */

  const fetchPokemons = async (limit = 20, offset = 0) => {
    try{
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const {results} = await res.json();
      setPokemons(results)
    }catch(e){
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchPokemons(150, 0);
  }, [])

  return (
   
    <div className="App">
      <Mycontext.Provider value={{pokemons, fetchPokemons}}>
        <BrowserRouter>
            <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>} index/>
            <Route path='/pokemons' element={<Pokemons/>}/>
            <Route path='/Details/:name' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider>
     
    </div>
  );
}

export default App;
