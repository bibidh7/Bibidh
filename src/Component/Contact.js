import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Router, Route, Path} from 'react-router-dom';
import {Container, Btn } from 'react-bootstrap';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const theme = createMuiTheme({
    overrides:{
        MuiButton:{
            text:{
                background:'white',
                color:'black',
            },
        },
    },


});

export default function Contact(){
   
 
return (
    <section id="contact" className="colored-section "> 
        <Container className="d-flex justify-content-center py-5 my-5">

            <div className="mb-5">
                <h2 className="mt-5"> Get in Touch or Hire me</h2>
                <ThemeProvider theme={theme}>
                <Button size="large"
                variant="contained" className="my-3">
                <a href="mailto:bibidh.shrestha@hotmail.com">Contact Me</a>
                    
                </Button>
               
            </ThemeProvider>
                
            </div>

        
        {/* <div className="contact-me">
                    
                    <h2>Get In Touch</h2>
                    <h3>If you love coding and sports as much i do.</h3>
                    <p>
                      Let's talk about sports and also we can code and develop crazy things.
                    </p><br>
                    <br>
                    <br>



                    <a href="mailto:bibidh.shrestha@hotmail.com">CONTACT ME</a>
        </div> */}
            
        </Container>
        
    </section>
    
);
}
