import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class TopSection extends React.Component {
    render() {
        return (
            <Container
                className={'section-spacer' + ' ' + this.props.customClass}
            >
                <Row className="justify-content-center align-items-center">
                    <div className="section-typography col-md-6 my-5 my-md-auto">
                        <h1 className="section-header">
                            {this.props.headerCopy}
                        </h1>
                        <p className="bodyCopy py-3">{this.props.bodyCopy}</p>
                        <Row className="pb-3 px-3">
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                            <a href="#" className="top-section-link mr-3">
                                Ortho/Braces
                            </a>
                        </Row>
                    </div>
                    <InfoCard
                        infoImageSource={this.props.infoImageSource}
                        infoHeaderCopy={this.props.infoHeaderCopy}
                        infoCopy={this.props.infoCopy}
                    />
                </Row>
            </Container>
        );
    }
}
