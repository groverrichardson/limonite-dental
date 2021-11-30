import React from 'react';
import Button from './button';

function SectionHero(props) {
    return (
        <div className="SectionHero">
            <h2 className="section-hero-header">{props.header}</h2>
            <p className="section-hero-copy">{props.copy}</p>
            <Button buttonText={props.buttonText} color="bg-gray-300" />
        </div>
    );
}

export default SectionHero;
