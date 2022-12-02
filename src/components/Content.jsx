import React from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const data = []

const userLogged = JSON.parse(localStorage.getItem("UserLogged")) ? JSON.parse(localStorage.getItem("UserLogged")) : []

class Content extends React.Component {
    constructor(props) {
        super()
    }

    state = {
        data: data,
        modalShow: false,
        form: {
            title: '',
            date: '',
            place: '',
        },
    }

    showModalAdd = () => {
        this.setState({
            modalShow: true,
        });
    };

    hideModalAdd = () => {
        this.setState({ modalShow: false });
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        var lista = this.state.data;
        console.log(lista)
        lista.push(valorNuevo);
        console.log(lista)
        this.setState({ modalShow: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <PageContent>
                    <div className='title'>
                        <h2>Bienvenido Tilín</h2>
                        <button className='btn btn-primary mb-4' onClick={() => this.showModalAdd()}>Añade un Evento</button>
                        <h1>Eventos Disponibles</h1>
                        <hr />
                    </div>
                    <Container>
                        <Row>
                            {this.state.data.map((evento) => (
                                // Estos elementos se añaden con el crud
                                <Col lg={3}>
                                    <div className='card text-center'>
                                        <a href="/">
                                            <img src={require("../imgs/shout.png")} alt="" />
                                        </a>
                                        <h3 className='text-center px-3 my-1'>{evento.title}</h3>
                                        <hr className='mx-3' />
                                        <Row>
                                            <div className='date col col-4'>
                                                <h6>{evento.date}</h6>
                                            </div>
                                            <div className='buy col col-8 text-center'>
                                                <p>{evento.place}</p>
                                                <Button>Comprar Entrada</Button>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </PageContent>
                <Modal isOpen={this.state.modalShow}>
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Añadir
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.hideModalAdd()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Content

const PageContent = styled.div`
    margin-left: 3rem; 
    margin-right: 3rem; 
    .title {
        margin-top: 2rem;
        h2 {
            margin-bottom: 2rem;
            font-size: 2.5em; 
        }
        h1 {
        color: #626263; 
        font-size: 1.8em; 
        }  
        hr {
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