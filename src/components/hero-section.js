import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmergencyButton from './emergency-button';
import RequestButton from './request-button';
import heroImg from '../assets/hero-image/hero-image.png';

export default class HeroSection extends React.Component {
    render() {
        return (
            <Container
                fluid
                className="hero-section-container p-2 py-5 py-md-2 px-3 px-sm-5"
            >
                <Row className="justify-content-center align-items-center p-3">
                    <div className="col-md-6 hero-typography py-2 py-md-5 mx-sm-5 mx-md-0">
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
                                <RequestButton customClass="col-xs-12 col-lg-5 p-lg mb-2 mb-lg-0 mr-lg-2 request request-hero" />
                                <EmergencyButton />
                            </Row>
                        </Container>
                    </div>
                    <img
                        src={heroImg}
                        alt="Smiling Faces"
                        className="hero-image col-md-6 p-3 mt-5 mt-0"
                    />
                </Row>
            </Container>
        );
    }
}
