import React from 'react';

export default class InfoCard extends React.Component {
    render() {
        return (
            <div
                className={'info-card col-md-6' + ' ' + this.props.customClass}
            >
                <img
                    src={this.props.infoImageSource}
                    alt=""
                    className="info-card-img p-2 mb-3 align-self-stretch"
                />
                <h3 className="info-header py-2">
                    {this.props.infoHeaderCopy}
                </h3>
                <p className="info-copy">{this.props.infoCopy}</p>
            </div>
        );
    }
}
