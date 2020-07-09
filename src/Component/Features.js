import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Container, Row, Col} from 'react-bootstrap';
export default function Features(){
    return(
        
        <section id="feature">
            <Container className="py-3 align-items-center ">
                <article className="">
                <h4>Hi</h4>
                <p className="py-2">I'm a web developer based in Melbourne, Australia. I have a passion for web development and sports.</p>
                </article>
                
            </Container>
            
            <hr></hr>

            <article className="article-feature mt-3 pt-3">
                    <h2>What I can do?</h2>
                    <Row className="py-3 mt-5">
                            <Col xs={12} md={8} lg={8}>
                            <h4 className="pb-3 ">
                               Design and Development 
                            </h4>
                            <p className="skills pb-2 mb-2">
                                I started coding since high school and i have gain wealth of experience in coding and web development.

                            </p>
                            </Col>
                            <Col xs={12} md={4} lg={4}>

                            <div className="skills-img">

                                <img src="https://media.giphy.com/media/MCKlOUhyh179x1mVkp/giphy.gif" alt="Giphy"/>
                            
                            </div>
                            
                            </Col>
                    </Row>
                    <Row className="py-3 mt-3">
                    <Col xs={12} md={4} lg={4}>
                    <div className="skills-img ">
                    <img src="https://media.giphy.com/media/dScVpooZGBQQpMXJkp/giphy.gif" alt="Giphy"/>      
                            
                    </div>
                        
                        
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                    <h3>Hobbies</h3>
                      <p className="hobbies">I love soccer and music. i also love playing FIFA on free time and also spend my free time with coding and doing research.</p>
                  
                            
                    </Col>
                    </Row>
                   
            </article>
            
        </section>
        
    );

}

