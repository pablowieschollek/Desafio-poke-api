import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Logo from '../assets/img/logo.png'


export const Navigation = () => {

    const setActive = ({isActive}) => (isActive ? "active" : "nonactive");
  return (
    <Navbar bg="dark">
        <Container className="nav d-flex w-100 justify-content-between">
            <Navbar.Brand className="d-flex flex-end">
                 <div className='p-3'>
                <img
                src={Logo}
                width="30"
                height="30"
                className="mapa"
                alt="PokeMap"/>
                </div>
                <div className='p-3'>
                <NavLink to="/" className={setActive} end>Home</NavLink>
                </div>
                <div className='p-3'>
                <NavLink to="/pokemons" className={setActive}>Pokemones</NavLink>
                </div>
                
        </Navbar.Brand>
        </Container>
    </Navbar>
  )
}
