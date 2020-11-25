import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class ProfilePreview extends React.Component {
    render() {
        return (
            <Container className="p-5 section-spacer">
                <Row className="justify-content-around align-items-center">
                    <InfoCard
                        infoImageSource={this.props.infoImageSource}
                        infoHeaderCopy={this.props.infoHeaderCopy}
                        infoCopy={this.props.infoCopy}
                    />
                    <div className="section-typography col-md-6 col-lg-4 pr-md-5 pr-lg my-md-5 mb-5 my-md-auto order-last order-md-first">
                        <h2 className="section-header">
                            {this.props.headerCopy}
                        </h2>
                        <p className="bodyCopy py-3">{this.props.bodyCopy}</p>
                        <Button className="profile-button btn service-section-button col-xs-12 col-lg p-lg">
                            {this.props.buttonCopy}
                        </Button>
                    </div>
                </Row>
            </Container>
        );
    }
}
