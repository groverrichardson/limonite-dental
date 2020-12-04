import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class Section extends React.Component {
    render() {
        return (
            <Container
                fluid
                className={
                    'section-spacer section extra-spacer' +
                    ' ' +
                    this.props.customClass
                }
            >
                <Row className="justify-content-around align-items-center section">
                    <div className="section-typography col-md-6 col-lg-4 pr-md-5 pr-lg my-md-5 mb-5 my-md-auto order-last order-md-first">
                        <h1 className="section-header">
                            {this.props.headerCopy}
                        </h1>
                        <p className="bodyCopy py-3">{this.props.bodyCopy}</p>
                        <Button className="btn service-section-button col-xs-12 col-lg p-lg">
                            {this.props.buttonCopy}
                        </Button>
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
