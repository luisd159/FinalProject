import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function Register() {
  const navigate = useNavigate();
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
    navigate("/login");
  }

  return (
    <>
      <RegisterContent>
        <Container>
          <Row>
            <Col>
              <div className='my-3'>
                <h1>Registrarse</h1>
                <hr />
              </div>
              <div className='my-3'>
                <label className='form-label' for="username"><b>Usuario</b></label>
                <input className='form-control' type="text" placeholder="Digite el usuario" name="username" onChange={handleUsername} value={username} />
              </div>

              <div className='my-3'>
                <label className='form-label' for="password"><b>Contraseña</b></label>
                <input className='form-control' type="password" placeholder="Digite la contraseña" name="password" onChange={handlePassword} value={password} />
              </div>

              <div>
                <input className='form-check-input' type="checkbox" onChange={handleIsSeller} checked={isSeller} /> ¿Eres Vendedor?
                <button className='btn btn-primary d-block my-3' type="submit" onClick={onClick}>Registrarse</button>
                <Link className='link' to="/login">¿Ya tienes una cuenta? INICIA SESIÓN AQUÍ</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </RegisterContent>
    </>
  )
}

const RegisterContent = styled.div`
  h1 {
      color: #626263;
      font-size: 2em; 
  }
  .link {
    text-decoration: none; 
  }
`
