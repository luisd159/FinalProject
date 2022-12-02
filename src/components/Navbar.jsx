import React from 'react'
import styled from 'styled-components'
import { HiUser, HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Navbar() {
    
    return (
        <>
            <NavContainer>
                <h2>SoyB<span>o</span>leta</h2>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/login"><span><HiUser /></span>Ingresar</Link>
                </div>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
    h2 {
        margin-left: 1rem; 
        font-size: 2.25rem;
        color: white; 
        font-weight: 600;
        span {
            color: #f3be0b; 
            font-weight: bold; 
        }
    }
    padding: 1rem; 
    background-color: #0170ce; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
    position: relative;
    text-decoration: none;
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