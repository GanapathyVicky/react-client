import React from 'react'
import './footer.css'

import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from "../../assets/images/logo.png";

const quick__links=[
  {
    path:"/home",
    display:"HOME"
  },
  {
    path:"#",
    display:"ABOUT"
  },
  {
    path:"/Tour",
    display:"TOUR"
  },
]
const quick__links2=[
  {
    path:"/gallery",
    display:"Gallery"
  },
  {
    path:"/login",
    display:"Login"
  },
  {
    path:"/register",
    display:"Register"
  },
]


const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className='logo'>
              <img src={logo} alt=""/>
              <p>We are the best of all </p>
            <div className='social__links d-flex align-items-center gap-4'>
            <span>
                <Link to="#"><i class="ri-youtube-line"></i></Link>
              </span>

              <span>
                <Link to="#"><i class="ri-github-line"></i></Link>
              </span>

              <span>
                <Link to="#"><i class="ri-youtube-line"></i></Link>
              </span>

              <span>
                <Link to="#"><i class="ri-facebook-fill"></i></Link>
              </span>

            </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((items,index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={items.path}>{items.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((items,index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={items.path}>{items.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
          <h5 className="footer__link-title">Contacts</h5>

            <ListGroup className="footer__quick-links">
            
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class ="ri-map-pin-Line"></i></span>
                Address
              </h6>
              <p classname="mb=0">francis Xavier College</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class ="ri-mail-Line"></i></span>
                Email
              </h6>
              <p classname="mb=0">ggsundaram7824@mail.com</p>
              </ListGroupItem>
              
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class ="ri-map-pin-Line"></i></span>
                Phone:
              </h6>
              <p classname="mb=0">+6380206301</p>
              </ListGroupItem>
            
            </ListGroup>
            
          </Col>
        </Row>
      </Container>
      </footer>
  )
}

export default footer
