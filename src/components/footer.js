import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="p-5 footer">
                <Row>
                    <div className="col-12 col-md-6 col-lg-3 my-3 footer-hours">
                        <h4 className="footer-header hours-header">Hours</h4>
                        <p className="footer-typography footer-date-and-time footer-typography">
                            Monday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Tuesday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Wednesday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Thursday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Friday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Saturday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                        <p className="footer-typography footer-date-and-time">
                            Sunday{' '}
                            <span className="ml-3 footer-times">
                                9:00AM - 11:00PM
                            </span>
                        </p>
                    </div>
                    <div className="footer-contact col-12 col-md-6 col-lg-3 my-3">
                        <h4 className="footer-contact-header footer-header">
                            Contact
                        </h4>
                        <p className="footer-typography address">
                            39400 Murrieta Hot Springs Rd., Murrieta, CA 92563
                        </p>
                        <p className="footer-typography phone-number">
                            (951) 461-7470
                        </p>
                        <a
                            href="#"
                            className="book-an-appointment footer-typography"
                        >
                            Book an Appointment
                        </a>
                    </div>
                    <div className="pages col-12 col-md-6 col-lg-3 my-3">
                        <h4 className="pages-header footer-header">Pages</h4>
                        <p className="footer-typography pages-services">
                            Services
                        </p>
                        <p className="footer-typography pages-services">Team</p>
                        <p className="footer-typography pages-services">
                            What to Expect
                        </p>
                        <p className="footer-typography pages-services">
                            Financing
                        </p>
                        <p className="footer-typography pages-services">Blog</p>
                    </div>
                    <div className="connect col-12 col-md-6 col-lg-3 my-3">
                        <h4 className="connect-header footer-header">
                            Connect
                        </h4>
                        <Row className="px-3">
                            <a
                                href="#"
                                className=" footer-typography google-review"
                            >
                                Leave a Review on Google
                            </a>
                        </Row>
                        <Row className="px-3">
                            <a
                                href="#"
                                className=" footer-typography yelp-review"
                            >
                                Leave a Review on Yelp
                            </a>
                        </Row>
                    </div>
                </Row>
            </Container>
        );
    }
}
