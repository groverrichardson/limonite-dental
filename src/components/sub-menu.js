import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class SubMenu extends React.Component {
    render() {
        return (
            <Container fluid className="sub-menu px-5 py-auto">
                <Row className="office-hours-container justify-content-start align-items-center py-2">
                    <Row className="col-sm-12 col-lg-2 justify-content-center align-items-center">
                        <p className="office-hours m-0 text-uppercase">
                            Office Hours
                        </p>
                    </Row>
                    <Row className="col-sm-12 col-lg-3 justify-content-center">
                        <p className="days mr-3">Monday-Thursday</p>
                        <p className="times">9AM - 6PM</p>
                    </Row>
                    <Row className="col-sm-12 col-lg-3 justify-content-center">
                        <p className="days mr-3">Friday</p>
                        <p className="times">9AM - 6PM</p>
                    </Row>
                    <Row className="col-sm-12 col-lg justify-content-center">
                        <p className="days mr-3">Saturday</p>
                        <p className="times">Appointment Only</p>
                    </Row>
                    <Row className="col-sm-12 col-lg justify-content-center">
                        <p className="days mr-3">Call Us</p>
                        <p className="times">(951) 360-2020</p>
                    </Row>
                </Row>
            </Container>
        );
    }
}
