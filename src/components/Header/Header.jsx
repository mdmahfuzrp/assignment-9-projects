import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <div className=''>
            <Navbar bg="light" expand="lg">
                <Container className='px-5' fluid>
                    <Navbar.Brand className='navbar-brand'>Future<span>Job</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                           >
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/statistics">Statistics</ActiveLink>
                            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                            <ActiveLink to="/blog">Blog</ActiveLink>
                        </Nav>
                        <Button variant="outline-danger">Start Applying</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;