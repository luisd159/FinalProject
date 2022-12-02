import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Auth.context';
import { Container, Row, Col } from 'react-bootstrap';
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
    console.log(user)
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
              <div className='mt-3'>
                <h1>Iniciar Sesión</h1>
              </div>
              <div className='my-3'>
                <label className='form-label' htmlFor="username">Usuario</label>
                <input id='username' className='form-control' type="text" placeholder="Digite su nombre de usuario" name="username" onChange={handleUsername} value={username} />
              </div>

              <div className='my-3'>
                <label className='form-label' htmlFor="password">Contraseña</label>
                <input id='password' className='form-control' type="password" placeholder="Digite su contraseña" name="password" onChange={handlePassword} value={password} />
              </div>

              <div>
                <button className='btn btn-primary btn-block d-block mb-3' type="submit" onClick={onClick}>Login</button>
                <Link className='link' to="/register">¿Aún no tienes una cuenta?  REGÍSTRATE GRATIS AQUÍ</Link>
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
