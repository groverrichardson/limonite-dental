import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class TopSection extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="top-section-typography col">
                        <h1 className="top-section-header">
                            {this.props.header}
                        </h1>
                        <p className="top-section-copy">
                            {this.props.bodyCopy}
                        </p>
                        <Row>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link">
                                Ortho/Braces
                            </a>
                        </Row>
                    </div>
                    <img
                        src={this.props.image}
                        alt=""
                        className="top-section-image"
                    />
                </Row>
            </Container>
        );
    }
}
