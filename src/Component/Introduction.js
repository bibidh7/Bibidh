import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Carousel, Row, Col} from 'react-bootstrap';
import AvatarImage from '../Images/avatar.JPG';

const useStyles = makeStyles((theme)=>({
    large: {
        width: theme.spacing(19),
        height: theme.spacing(19),
    }
  
    

}));
export default function Introduction(){
    const classes = useStyles();
    return(
        <section id="intro" >
        <Container>

            <Row>
                <Col xs={12} sm={12} lg={12} className="d-flex justify-content-center py-5">
                    <Avatar alt="bibidh" src={AvatarImage} className={classes.large}></Avatar>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} lg={12} className="d-flex justify-content-center py-2">
                    <p>
                        <Typography variant="h1"  className="title">
                             I'm Bibidh
                        </Typography>
                        <Typography variant="h5"  className="title">
                          <p > a web developer</p> 
                        </Typography>
                    </p>
                </Col>
            </Row>
            

        </Container>


    </section>
           )
 
}