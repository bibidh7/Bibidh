import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
//import GitHubIcon from '@material-ui/icons/Github';
import GitHubIcon from '@material-ui/icons/GitHub';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer(){
    return (
        <section id="footer">
            <Container className=" py-5 my-5">
            
                    
                    <p>
                    <a href="https://www.linkedin.com/in/bibidh-shrestha-35b524110/">
                         <LinkedInIcon className="mr-2 icon-color"/>
                    </a>
                    <a href="https://www.facebook.com/bibidhshrestha/">
                        <FacebookIcon className="mr-2 icon-color"/>
                    </a>
                    <a href="https://github.com/bibidh7">    
                        <GitHubIcon className="icon-color"/>
                    </a>
                    </p>
               

            
               
                <p>© Copyright {new Date().getFullYear()} Bibidh Shrestha</p>
               
            </Container>
        </section>

    );

}
