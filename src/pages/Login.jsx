import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSeller, setIsSeller] = useState(false)

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClick = () => {
  
    const users = JSON.parse(localStorage.getItem("users"))
    for (let index = 0; index <= users.length; index++) {
      console.log(users[index].username)
      console.log(index)
      if (users[index].username === username) {
          if(users[index].password === password){
            const userLog ={
              username,
              password,
              isSeller : users[index].isSeller
            }
            localStorage.setItem("UserLogged", JSON.stringify(userLog))
            alert("estas ingresado con exito")
          }else{
            alert("Estas escribiendo una contraseña equivocada")
          }
      }else{
        alert("Estas Escribiendo un Usuario Invalido")
      }
    }
    

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
