import React from 'react'
import styled from 'styled-components'
import { Container, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Content() {
    return (
        <>
            <PageContent>
                <div className='title'>
                    <h1>Eventos Disponibles</h1>
                    <hr />
                </div>
                <Container>
                    <Row>
                        {/* Estos elementos se tienen que añadir en el crud */}
                        <Col lg={3}>
                            <div className='card text-center'>
                                <a href="/">
                                    <img src={require("../imgs/shout.png")} alt="" />
                                </a>
                                <h3 className='text-center px-3 my-1'>AHHHH</h3>
                                <hr className='mx-3' />
                                <Row>
                                    <div className='date col col-4 text-center'>
                                        JUE
                                        <div className='day'>
                                            01
                                        </div>
                                        DIC 2022
                                    </div>
                                    <div className='buy col col-8 text-center'>
                                        <p>Estadio El Campín</p>
                                        <Button>Comprar Entrada</Button>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card text-center'>
                                <a href="/">
                                    <img src={require("../imgs/shout.png")} alt="" />
                                </a>
                                <h3 className='text-center px-3 my-1'>AHHHH</h3>
                                <hr className='mx-3' />
                                <Row>
                                    <div className='date col col-4 text-center'>
                                        JUE
                                        <div className='day'>
                                            01
                                        </div>
                                        DIC 2022
                                    </div>
                                    <div className='buy col col-8 text-center'>
                                        <p>Estadio El Campín</p>
                                        <Button>Comprar Entrada</Button>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </PageContent>
        </>
    )
}

export default Content

const PageContent = styled.div`
    margin-left: 3rem; 
    margin-right: 3rem; 
    .title {
        margin-top: 2rem;
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
                margin-top: 1rem;
                box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
                img {
                    padding: 0.3rem;
                    width: 200px;
                    height: 200px;
                }
                .date {
                    padding: 0.2rem; 
                    color: #5f5f5f;
                    font-weight: bold; 
                    .day {
                    font-size: 35px;
                    color: #3975e8; 
                    font-weight: bold;
                    }
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