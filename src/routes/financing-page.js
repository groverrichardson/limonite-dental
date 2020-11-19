import React from 'react';
import InfoCard from '../components/info-card';
import SubMenu from '../components/sub-menu';
import TopMenu from '../components/top-menu';
import TopSection from '../components/top-section';
import sampleImg from '../assets/patient-smiling.jpeg';
import { Row } from 'react-bootstrap';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export default class FinancingPage extends React.Component {
    render() {
        return (
            <>
                <TopMenu />
                <SubMenu />
                <TopSection
                    headerCopy="Financing"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    infoImageSource={sampleImg}
                    customClass="px-5"
                />
                <Row className="p-5">
                    <InfoCard
                        infoImageSource={sampleImg}
                        infoHeaderCopy="Wells Fargo"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        customClass="py-5"
                    />
                    <InfoCard
                        infoImageSource={sampleImg}
                        infoHeaderCopy="Wells Fargo"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        customClass="py-5"
                    />
                    <InfoCard
                        infoImageSource={sampleImg}
                        infoHeaderCopy="Wells Fargo"
                        infoCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        customClass="py-5"
                    />
                </Row>
                <ContactSection />
                <Footer />
            </>
        );
    }
}
