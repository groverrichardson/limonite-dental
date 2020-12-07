import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmergencyButton from './emergency-button';
import RequestButton from './request-button';
import heroImg from '../assets/hero-image/hero-image.png';
import pinkCircle from '../assets/pink-circle.svg';
import tealCircle from '../assets/teal-circle.svg';
import yellowCircle from '../assets/yellow-circle.svg';

export default class HeroSection extends React.Component {
    render() {
        return (
            <Container
                fluid
                className="hero-section-container p-2 py-3 py-md-2 px-3 px-sm-5 justify-content-center"
            >
                <Row className="justify-content-around align-items-center p-3 hero-row-container m-auto mt-xl-5">
                    <div className="col-md-6 hero-typography py-2 py-md-5">
                        <h1 className="hero-header">
                            Your Best Smile <br className="d-none d-md-block" />{' '}
                            Is One Visit Away
                        </h1>
                        <p className="hero-copy py-3">
                            Donec id elit non mi porta gravida at eget metus.
                            Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </p>
                        <Container>
                            <Row>
                                <RequestButton customClass="col-xs-12 col-lg p-lg mb-2 mb-lg-0 mr-lg-2 request request-hero" />
                                <EmergencyButton />
                            </Row>
                        </Container>
                    </div>
                    <div className="hero-image-container col-md-6 mt-5 mt-0">
                        <img
                            src={pinkCircle}
                            alt="decorative circle"
                            className="pink hero-pink"
                        />
                        <img
                            src={tealCircle}
                            alt="decorative circle"
                            className="teal hero-teal"
                        />
                        <img
                            src={yellowCircle}
                            alt="decorative circle"
                            className="yellow hero-yellow"
                        />
                        <img
                            src={heroImg}
                            alt="Smiling Faces"
                            className="hero-image col p-3"
                        />
                    </div>
                </Row>
            </Container>
        );
    }
}
