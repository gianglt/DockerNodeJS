import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container } from 'react-bootstrap';

import AppNavbar from './components/AppNavbar';
import AppCarousel from './components/AppCarousel'; 



export default function App() {
  return (
    <>
    <AppNavbar UserName="gianglt"/>
    <AppCarousel/>
    </>
  )
}