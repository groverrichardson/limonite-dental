import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="col footer-hours">
                        <h4 className="hours-header">Hours</h4>
                        <p className="footer-date-and-time">
                            Monday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Tuesday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Wednesday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Thursday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Friday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Saturday 9:00AM - 11:00PM
                        </p>
                        <p className="footer-date-and-time">
                            Sunday 9:00AM - 11:00PM
                        </p>
                    </div>
                    <div className="footer-contact col">
                        <h4 className="footer-contact-header">Contact</h4>
                        <p className="address">
                            39400 Murrieta Hot Springs Rd., Murrieta, CA 92563
                        </p>
                        <p className="phone-number">(951) 461-7470</p>
                        <a href="#" className="book-an-appointment">
                            Book an Appointment
                        </a>
                    </div>
                    <div className="pages">
                        <h4 className="pages-header">Pages</h4>
                        <p className="pages-services">Services</p>
                        <p className="pages-services">Team</p>
                        <p className="pages-services">What to Expect</p>
                        <p className="pages-services">Financing</p>
                        <p className="pages-services">Blog</p>
                    </div>
                    <div className="connect">
                        <h4 className="connect-header">Connect</h4>
                        <a href="#" className="google-review">
                            Leave a Review on Google
                        </a>
                        <a href="#" className="yelp-review">
                            Leave a Review on Yelp
                        </a>
                    </div>
                </Row>
            </Container>
        );
    }
}
