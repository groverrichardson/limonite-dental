import React from 'react';
import InfoCard from './info-card';
import SectionHero from './section-hero';

function QuadSection() {
    const infoCopy =
        'Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    return (
        <section className="QuadSection">
            <SectionHero
                header="Our Services"
                copy={infoCopy}
                buttonText="See all Services"
            />
            <InfoCard header="" copy="" img="" />
            <InfoCard header="" copy="" img="" />
            <InfoCard header="" copy="" img="" />
        </section>
    );
}

export default QuadSection;
