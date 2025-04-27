import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";
import Usuario from "./pages/Usuario";
import './App.css'
import Calculadora from "./pages/Calculadora";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mapa" element={<Mapa/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/usuario" element={<Usuario/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
