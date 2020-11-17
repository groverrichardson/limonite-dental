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
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <Row>
                    <InfoCard
                        infoImageSource={sampleImg}
                        infoHeaderCopy="Aligners"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    />
                    <InfoCard
                        infoImageSource={sampleImg}
                        infoHeaderCopy="Aligners"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    />
                </Row>
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <Section
                    headerCopy="This is a test"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="See all Services"
                    infoImageSource={sampleImg}
                    infoHeaderCopy="Ortho/Braces"
                    infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <ContactSection />
                <Footer />{' '}
            </>
        );
    }
}
