import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuthContext } from '../Auth.context';


export default function Content() {
    const { user, isLoggedIn, logout } = useAuthContext()

    const [modalShow, setModalShow] = useState(false)
    const [modalShowEdit, setModalShowEdit] = useState(false)
    const [modalShowBuy, setModalShowBuy] = useState(false)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [place, setPlace] = useState("")
    const [price, setPrice] = useState("")
    const [id, setId] = useState("")
    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(JSON.parse(localStorage.getItem("events")) ? JSON.parse(localStorage.getItem("events")) : [])
    }, [])

    const nombre = isLoggedIn ? user.username : ""
    const form = {
        id,
        userName: nombre,
        title,
        date,
        place,
        price
    }

    //Handles de las tablas modales
    const handleModalShow = () => {
        setModalShow(true)
        setId('')
        setTitle('')
        setDate('')
        setPlace('')
        setPrice('')
    }

    const handleModalShowEdit = (event) => {
        setModalShowEdit(true)
        setId(event.id)
        setTitle(event.title)
        setDate(event.date)
        setPlace(event.place)
        setPrice(event.price)
    }

    const handleModalShowBuy = (event) => {
        setModalShowBuy(true)
        setId(event.id)
        setTitle(event.title)
        setDate(event.date)
        setPlace(event.place)
        setPrice(event.price)
    }

    const handleOffModalShow = () => {
        setModalShow(false)
    }

    const handleOffModalShowEdit = () => {
        setModalShowEdit(false)
    }

    const handleOffModalShowBuy = () => {
        setModalShowEdit(false)
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

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const insertar = () => {
        form.id = '' + (events.length + 1) + '';
        events.push(form)
        localStorage.setItem("events", JSON.stringify(events))
        setEvents(events)
        setModalShow(false)
    }

    const editar = (id, title, date, place, price) => {
        var cont = 0;
        var lista = events;
        lista.map((event) => {
            if (id === event.id) {
                lista[cont].title = title;
                lista[cont].date = date;
                lista[cont].place = place;
                lista[cont].price = price;
            }
            cont++;
        });
        localStorage.setItem("events", JSON.stringify(lista))
        setEvents(lista)
        setModalShowEdit(false);
    }

    const eliminar = (eventoEliminar) =>{
        var lista = events;
        var temp = []
        lista.map((event) => {
            if (eventoEliminar.id !== event.id) {
                temp.push(event)
            }
        });
        console.log(temp)
        localStorage.removeItem("events")
        localStorage.setItem("events", JSON.stringify(temp))
        setEvents(temp)
        alert("Eliminado con exito")
    }

    const buyTicket = () => {
        alert('Gracias por su compora')
        setModalShowBuy(false);
    }

    return (
        <>
            <PageContent>
                <div className='title'>
                    {user != null && <h1 className='welcome'>Bienvenido <span className='username'>{user.username}</span></h1>}
                    {user != null && <hr />}
                    {user != null && (user["isSeller"] === true && <button className='btn btn-primary mb-4' onClick={handleModalShow}>Añade un Evento</button>)}
                    <h1>Eventos Disponibles</h1>
                    <hr className='event_hr' />
                </div>
                <Container>
                    <Row>
                        {events.map((event) => (
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
                                            {user != null && user['isSeller'] === true && event.userName === nombre && <button onClick={() => handleModalShowEdit(event)} className='btn btn-primary my-1'>Editar</button>}
                                            {user != null && user['isSeller'] === true && event.userName === nombre && <button className='btn btn-danger'onClick={() => eliminar(event)} >Eliminar</button>}
                                        </div>
                                        <div className='buy col col-8 text-center'>
                                            <p>{event.place}</p>
                                            <Button onClick={()=>handleModalShowBuy(event)} className='mt-2'>Comprar Entrada</Button>
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
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={events.length + 1}
                        />
                    </FormGroup>
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

                    <FormGroup>
                        <label>
                            Precio por entrada:
                        </label>
                        <input
                            className="form-control"
                            name="price"
                            type="text"
                            onChange={handleChangePrice}
                            value={price}
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
            <Modal isOpen={modalShowEdit}>
                <ModalHeader>
                    <div><h3>Editar Evento</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={id}
                        />
                    </FormGroup>
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

                    <FormGroup>
                        <label>
                            Precio por entrada:
                        </label>
                        <input
                            className="form-control"
                            name="price"
                            type="text"
                            onChange={handleChangePrice}
                            value={price}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => editar(id, title, date, place, price)}
                    >
                        Editar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={handleOffModalShowEdit}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalShowBuy}>
                <ModalHeader>
                    <div><h3>Comprar Entrada</h3></div>
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
                            readOnly
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
                            readOnly
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
                            readOnly
                            onChange={handleChangePlace}
                            value={place}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Precio de la entrada:
                        </label>
                        <input
                            className="form-control"
                            name="price"
                            type="text"
                            readOnly
                            onChange={handleChangePrice}
                            value={price}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => buyTicket()}
                    >
                        Comprar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={handleOffModalShowBuy}
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
                    .btn {
                        width: 100px;
                    }
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