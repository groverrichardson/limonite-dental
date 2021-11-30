import React from 'react';

function InfoCard(props) {
    return (
        <div className="InfoCard">
            <img
                src={props.img}
                alt={props.imgDescription}
                className="info-img"
            />
            <h3 className="info-header">{props.header}</h3>
            <p className="info-copy">{props.copy}</p>
        </div>
    );
}

export default InfoCard;
