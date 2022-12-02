import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuthContext } from '../Auth.context';


export default function Content() {
    const { user, isLoggedIn, logout } = useAuthContext()

    const [dataForm, setDataForm] = useState(data)
    const [modalShow, setModalShow] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [place, setPlace] = useState("")

    const form = {
        title,
        date,
        place
    }
    const handleModalShow = () => {
        setModalShow(true)
    }

    const handleOffModalShow = () => {
        setModalShow(false)
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }
    const handleChangePlace = (e) => {
        setPlace(e.target.value)
    }

    var data = JSON.parse(localStorage.getItem("events")) ? JSON.parse(localStorage.getItem("events")) : []

    const insertar = () => {
        data.push(form)
        localStorage.setItem("events", JSON.stringify(data))
        setModalShow(false)
    }

    return (
        <>
            <PageContent>
                <div className='title'>
                    {user != null && <h1 className='welcome'>Bienvenido <span className='username'>{user.username}</span></h1>}
                    {user != null && <hr />}
                    {user != null && (user["isSeller"] === true && <button className='btn btn-primary mb-4' onClick={handleModalShow}>Añade un Evento</button>)}
                    <h1>Eventos Disponibles</h1>
                    <hr className='event_hr'/>
                </div>
                <Container>
                    <Row>
                        {data.map((event) => (
                            // Estos elementos se añaden con el crud
                            <Col lg={3}>
                                <div className='card text-center'>
                                    <a href="/">
                                        <img src={require("../imgs/shout.png")} alt="" />
                                    </a>
                                    <h3 className='text-center px-3 my-1'>{event.title}</h3>
                                    <hr className='mx-3' />
                                    <Row>
                                        <div className='date col col-4'>
                                            <h6>{event.date}</h6>
                                        </div>
                                        <div className='buy col col-8 text-center'>
                                            <p>{event.place}</p>
                                            <Button>Comprar Entrada</Button>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </PageContent>
            <Modal isOpen={modalShow}>
                <ModalHeader>
                    <div><h3>Añadir Evento</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>
                            Título:
                        </label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            onChange={handleChangeTitle}
                            value={title}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Fecha:
                        </label>
                        <input
                            className="form-control"
                            name="date"
                            type="date"
                            onChange={handleChangeDate}
                            value={date}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Lugar:
                        </label>
                        <input
                            className="form-control"
                            name="place"
                            type="text"
                            onChange={handleChangePlace}
                            value={place}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={insertar}
                    >
                        Añadir
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={handleOffModalShow}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

const PageContent = styled.div`
    margin-left: 3rem; 
    margin-right: 3rem; 
    .title {
        margin-top: 2rem;
        .welcome {
            font-size: 2.2em; 
            .username {
                color: #f3be0b
            }
        }
        hr {
            margin-bottom: 3rem; 
        }
        h2 {
            margin-bottom: 2rem;
            font-size: 2.5em; 
        }
        h1 {
        color: #626263; 
        font-size: 1.8em; 
        }  
        .event_hr {
            background-color: #0170ce; 
            max-width: 150px; 
            margin-left: 0;  
            height: 5px; 
        } 
    } 
    .container {
        margin-top: 2rem; 
        .row {
            .card {
                .row {
                    margin-left: 1rem; 
                }
                margin-top: 1rem;
                box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
                img {
                    padding: 0.3rem;
                    width: 200px;
                    height: 200px;
                }
                .date {
                    padding: 0.2rem; 
                    font-weight: bold; 
                    text-align: center; 
                }
                .buy {
                    padding: 0.2rem; 
                    font-weight: 500;
                    color: #5f5f5f; 
                }
            }
        }
    }
`