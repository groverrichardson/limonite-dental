import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import InfoCard from '../components/info-card';
import Section from '../components/section';
import SubMenu from '../components/sub-menu';
import TopMenu from '../components/top-menu';
import sampleImg from '../assets/patient-smiling.jpeg';
import smilingBraces from '../assets/smiling-braces/smiling-braces.png';
import aligners from '../assets/aligners/aligners.png';
import crowns from '../assets/crowns/crowns.png';

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Container fluid className="sticky-top bg-white px-0">
                    <TopMenu />
                    <SubMenu />
                </Container>
                <HeroSection />
                <Section
                    headerCopy="Our Services"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={smilingBraces}
                    infoHeaderCopy="Ortho / Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    customClass="mb-5 px-5"
                />
                <Container fluid>
                    <Row>
                        <InfoCard
                            infoImageSource={aligners}
                            infoHeaderCopy="Aligners"
                            infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            customClass="mb-5 px-5"
                        />
                        <InfoCard
                            infoImageSource={crowns}
                            infoHeaderCopy="Crowns"
                            infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            customClass="mb-5 px-5"
                        />
                    </Row>
                </Container>
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    customClass="mb-5 px-5"
                />
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    customClass="mb-5 px-5"
                />
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    customClass="mb-5 px-5 last-section"
                />
                <ContactSection />
                <Footer />{' '}
            </>
        );
    }
}
