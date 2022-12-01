import React from 'react'
import styled from 'styled-components'
import { HiUser } from "react-icons/hi";

function Navbar() {
    return (
        <>
            <NavContainer>
                <h2>SoyB<span>o</span>leta</h2>
                <div>
                    <a href="/">Inicio</a>
                    <a href="/"><span><HiUser /></span>Ingresar</a>
                </div>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
    h2 {
        margin-left: 1rem; 
        font-size: 28px;
        color: white; 
        font-weight: 600;
        span {
            color: #f3be0b; 
            font-weight: bold; 
        }
    }
    padding: .4rem; 
    background-color: #0170ce; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    a {
        span {
            font-size: 22px; 
            margin-right: 5px; 
        }
        font-size: 18px;
        color: white; 
        text-decoration: none; 
        margin-right: 2rem; 
    }
`