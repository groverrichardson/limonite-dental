import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class ProfilePreview extends React.Component {
    render() {
        return (
            <Container className="p-5 section-spacer">
                <Row className="justify-content-center align-items-center">
                    <InfoCard
                        infoImageSource={this.props.infoImageSource}
                        infoHeaderCopy={this.props.infoHeaderCopy}
                        infoCopy={this.props.infoCopy}
                    />
                    <div className="section-typography col-md-6">
                        <h2 className="section-header">
                            {this.props.headerCopy}
                        </h2>
                        <p className="bodyCopy py-3">{this.props.bodyCopy}</p>
                        <Button className="profile-button col-12">
                            {this.props.buttonCopy}
                        </Button>
                    </div>
                </Row>
            </Container>
        );
    }
}
