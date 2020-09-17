import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import banner from '../assets/img/banner.jpg'
import '../assets/css/component.css';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
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
                            <NavLink className="navlink" href="#organisation">The Organisation</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlink" href="#team">The Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlink" href="#">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
            <div className="d-flex justify-content-center" fluid={true}>
                <img src={banner} alt='IET On Campus'/>
            </div>
        </div>
    )
}

export default Banner;