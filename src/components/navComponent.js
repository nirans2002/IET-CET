import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/component.css';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import anime from 'animejs';
import { Link } from 'react-router-dom';


function Navigation(){
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
        <div id='nav'>
            <Navbar expand='md' color='light'>
                <NavbarBrand>
                    <img src={logo} width='200px' alt='IET On Campus'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} id="menuCollapse">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </NavbarToggler>
                <Collapse isOpen={collapse} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink>
                                <Link to='/' className="navlink">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/events' className="navlink">Events</Link>
                            </NavLink>
                        </NavItem>
                        {/*
                        <NavItem>
                            <NavLink>
                                <Link to='/projects' className="navlink">Projects</Link>
                            </NavLink>
                        </NavItem>
                        */}
                        <NavItem>
                            <NavLink>
                                <Link to='/team' className="navlink">The Team</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/aboutus' className="navlink">About Us</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;