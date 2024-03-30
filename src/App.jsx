import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Registro from './components/Registro'

function App() {
  const [mensaje, setMensaje] = useState('')

  return (
    <>
      <Registro
        messageAlert = {mensaje} 
        setMensaje = {setMensaje} />
    </>
  )
}

export default App
