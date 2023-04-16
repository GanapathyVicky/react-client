
import React from 'react';
import '../styles/home.css';
import { Container,Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery"
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt=""/> 
              </div>
              <h1>Traveling opens the door to creating
                <span className='highlight'> Memories</span></h1>
                <p>This is indeed India!”…. 
                  The land of dreams and romance, of fabulous wealth and fabulous poverty, of splendour and rags,
                  of palaces and hovels, of famine and pestilence, of genii and giants and Aladdin lamps, of tigers and elephants, 
                  the cobra and the jungle,the country of hundred nations and a hundred tongues, of a thousand religions and two million gods, 
                  the cradle of the human race, the birthplace of human speech, mother of history, grandmother of legend, great-grandmother of traditions, 
                  whose yesterdays bear date with the modering antiquities for the rest of nations-the one sole country under the sun that is endowed with
                  an imperishable interest for the alien prince and alien peasant, for lettered and ignorant, wise and fool, rich and poor, bond and free, 
                  the one land that all men desire to see, and having seen once, by even a glimpse, would not give that glimpse for the shows of all the rest of the world combined</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box'>
              <img src ={heroImg} alt=""/>
            </div>
          </Col>

          

          <Col lg='2'>
            <div className='hero__img-box'>
              <video src ={heroVideo} alt=""  controls/>
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box'>
              <img src ={heroImg02} alt=""/>
            </div>
          </Col>

        <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>What offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6' className=''>
            <div className='experience__content'>
            <Subtitle subtitle={'Experience'}/>
            <h2 className="">With our all Experience<br/>we will servw you</h2>
            <p>
              grvsdgsgsdgdgs<br/>vfsbfbfbgd
            </p>
            </div>
            <div className="counter__wapper d-flex align-items-center gap-5">
            <div className='counter__box'>
                <span>12k+</span>
                <h6>Suceesful Trip</h6>
              </div>

              <div className='counter__box'>
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>

              <div className='counter__box'>
                <span>5yaers</span>
                <h6>Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className='experience__img'>
              <img src={experienceImg} alt=""/>
            </div>
          </Col>          
        </Row>
      </Container>
    </section>

    <section>
      <container>
        <row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery_ttile'>
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </row>
      </container>
    </section>

    <section>
      <container>
        <Row>
          <Col lg="12">
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className ="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonials />
          </Col>
        </Row>
      </container>
    </section>
    <Newsletter/>
    </>
  
};

export default Home;

