import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Auth.context';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClick = () => {
    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.find((user) => user.username === username)
    console.log(user)
    if(!user){
      return alert("El usuario ingresado no se encuentra")
    }
    if(user.password !== password){
      return alert("Contraseña Incorrecta")
    }
    localStorage.setItem("UserLogged", JSON.stringify(user))
    login(user)
    navigate("/");
  }

  return (
    <div>

    <div className="container">
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" onChange={handleUsername} value={username} />

        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" onChange={handlePassword} value={password} />

        <button type="submit" onClick={onClick}>Login</button>
        <Link to="/register">REGISTRATE GRATIS AQUI</Link>
      </div>

    </div>
  )
}
