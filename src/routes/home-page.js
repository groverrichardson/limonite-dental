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
import doctors from '../assets/doctors/doctors.png';
import ReverseSection from '../components/reverse-section';
import receptionist from '../assets/receptionist/receptionist.png';
import purpleCircle from '../assets/purple-circle.svg';
import coralCircle from '../assets/coral-circle.svg';
import yellowCircle from '../assets/yellow-circle.svg';

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Container fluid className="sticky-top bg-white px-0">
                    <TopMenu />
                    <SubMenu />
                </Container>
                <HeroSection />
                <div className="service-section-container">
                    <img
                        src={purpleCircle}
                        alt=""
                        className="service-sec-circle-purple purple"
                    />
                    <img
                        src={coralCircle}
                        alt=""
                        className="service-sec-circle-coral coral"
                    />
                    <ReverseSection
                        headerCopy="Our Services"
                        bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        buttonCopy="See all Services"
                        infoImageSource={smilingBraces}
                        infoHeaderCopy="Ortho / Braces"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        customClass="mb-5 px-5 pt-5"
                    />
                </div>
                <Container fluid>
                    <Row className="info-img-container">
                        <img
                            src={yellowCircle}
                            alt=""
                            className="service-sec-circle-yellow yellow"
                        />
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
                            customClass="mb-5 px-5 pb-5"
                        />
                    </Row>
                </Container>
                <Section
                    headerCopy="Our Team"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Meet the Team"
                    infoImageSource={doctors}
                    customClass="mb-5 px-5"
                />
                <Section
                    headerCopy="What to Expect"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="mb-5 px-5"
                />
                <Section
                    headerCopy="Financing"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More About Financing"
                    infoImageSource={receptionist}
                    customClass="mb-5 px-5 pb-5"
                />
                <ContactSection />
                <Footer />{' '}
            </>
        );
    }
}
