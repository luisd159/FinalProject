import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSeller, setIsSeller] = useState(false)

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleIsSeller = () => {
    setIsSeller(!isSeller)
  }

  const onClick = () => {
    const payload = {
        username,
        password,
        isSeller
    }

    console.log(username)
    console.log(password)
    console.log(isSeller)

    if (username === "" || password === "") {
        return alert("Hay un campo vacio")
    }
    
    const users = localStorage.getItem("users") ? eval(localStorage.getItem("users")) : []
    users.push(payload)
    localStorage.setItem("users", JSON.stringify(users))
    
    alert("te has registrado con exito")
    setUsername("")
    setPassword("")
    setIsSeller(false)
  }

  return (
    <div>
        <div className="container">
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" onChange={handleUsername} value={username} />

        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" onChange={handlePassword} value={password} />

        <input type="checkbox" onChange={handleIsSeller} checked={isSeller} /> Eres Vendedor?

        <button type="submit" onClick={onClick}>Registrarse</button>
        <Link to="/login">¿Ya tienes Cuenta?  INICIA SESION AQUI</Link>
      </div>

    </div>
  )
}
