import React, { useState } from 'react'
import { verificarUsuario } from './verificarUsuario'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleLogin = async () => {
    const res = await verificarUsuario(usuario, clave)
    setMensaje(res.ok ? `Bienvenido ${res.nombre}` : res.mensaje)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h2>Ingreso a Clínica Hall</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Clave"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Entrar</button>
      <p>{mensaje}</p>
    </div>
  )
}

export default App
