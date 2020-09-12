import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/component.css';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler, Container } from 'reactstrap';
import { CaretRightFill } from 'react-bootstrap-icons'
import anime from 'animejs';


function Banner(){
    const [collapse, setCollapse] = useState(false);
    const toggle = () => {
        setCollapse(prevState => !prevState)
        if(collapse === true)
        {
            anime({
                targets: '.down',
                rotate: 0
            });
        }
        else
        {
            anime({
                targets: '.down',
                rotate: 90
            });
        }
    }
    return(
        <div>
            <Navbar expand='md' color='light'>
                <NavbarBrand>
                    <img src={logo} width='200px' alt='IET On Campus'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} >
                    <CaretRightFill className="down"/>
                </NavbarToggler>
                <Collapse isOpen={collapse} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink className="navlink" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlink" href="#">Organisation</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlink" href="#">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
            <Container className="banner">
                <img src={logo} width='1200px' alt='IET On Campus'/>
            </Container>
        </div>
    )
}

export default Banner;