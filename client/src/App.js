import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom"
import LandingPage from './Components/Cointainers/LandingPage';
import CreateRecipe from './Components/Cointainers/createRecipe';
import Detail from './Components/Cointainers/Detail';
import Home from './Components/Cointainers/Home';
import Nav from './Components/Cointainers/Nav';
import { useMemo } from 'react';


function App() {
  const navigate = useNavigate();
  
  useMemo(() =>{
    navigate('/landing')
  }, [] )
  return (
    <>
    <Nav />
    <Routes>
    <Route path ='/landing' element={<LandingPage/>} />
    <Route exact path ='/' element={<Home/>} />
    <Route path ='/createRecipe' element={<CreateRecipe/>} />
    <Route path ='/detail' element={<Detail/>} />
    </Routes>
    </>
  );
}

export default App;
