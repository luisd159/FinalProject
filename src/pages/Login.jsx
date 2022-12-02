import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Auth.context';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';

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
    if (!user) {
      return alert("El usuario ingresado no se encuentra")
    }
    if (user.password !== password) {
      return alert("Contraseña Incorrecta")
    }
    localStorage.setItem("UserLogged", JSON.stringify(user))
    login(user)
    navigate("/");
  }

  return (
    <>
      <LoginContent>
        <Container>
          <Row>
            <Col>
              <div className='my-3'>
                <h1>Iniciar Sesión</h1>
                <hr />
              </div>
              <div className='my-3'>
                <label className='form-label' for="username"><b>Usuario</b></label>
                <input className='form-control' type="text" placeholder="Digite su usuario" name="username" onChange={handleUsername} value={username} />
              </div>

              <div className='my-3'>
                <label className='form-label' for="password"><b>Contraseña</b></label>
                <input className='form-control' type="password" placeholder="Digite su contraseña" name="password" onChange={handlePassword} value={password} />
              </div>

              <div>
                <button className='btn btn-primary d-block mb-3' type="submit" onClick={onClick}>Login</button>
                <Link className='link' to="/register">¿Aún no tienes una cuenta? REGÍSTRATE GRATIS AQUÍ</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </LoginContent>

    </>
  )
}

const LoginContent = styled.div`
  h1 {
    color: #626263;
    font-size: 2em; 
  }
  .link {
    text-decoration: none; 
  }
`

