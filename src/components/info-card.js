import React from 'react';

export default class InfoCard extends React.Component {
    render() {
        return (
            <div className="info-card col-6">
                <img
                    src={this.props.infoImageSource}
                    alt=""
                    className="info-card-img"
                />
                <h3 className="info-header">{this.props.infoHeaderCopy}</h3>
                <p className="info-copy">{this.props.infoCopy}</p>
            </div>
        );
    }
}
