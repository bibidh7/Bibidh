import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from '../Files/BibidhShrestha.docx';
import GetAppIcon from '@material-ui/icons/GetApp';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AvatarImage from '../Images/avatar.JPG';

import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

const useStyles = makeStyles((theme)=>({
  medium: {
      width: theme.spacing(8),
      height: theme.spacing(8),
  }
}));
export default function Header() {

  const classes= useStyles();

  
  return(
 <section id="navigationbar">
  <Container>
  <Navbar sticky="top" collapseOnSelect expand="lg"  variant="light" className="header" >
  <Navbar.Brand className="brandName" href="#home"><Avatar alt="avatar image" src={AvatarImage} className="classes.medium"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="mr-1" >
      <Nav.Link  className="mr-4"href={Resume}><GetAppIcon/> Get My Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      
      </Nav>
  </Navbar.Collapse>
</Navbar> 
 

 </Container>
 </section>
 
 );
}