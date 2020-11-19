import React from 'react';
import SubMenu from '../components/sub-menu';
import TopMenu from '../components/top-menu';
import TopSection from '../components/top-section';
import sampleImg from '../assets/patient-smiling.jpeg';
import Section from '../components/section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export default class ServicesPage extends React.Component {
    render() {
        return (
            <>
                <TopMenu />
                <SubMenu />
                <TopSection
                    headerCopy="Services"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    infoImageSource={sampleImg}
                    customClass="px-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5"
                />
                <Section
                    headerCopy="Wisdom Teeth/Surgery"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Request an Appointment"
                    infoImageSource={sampleImg}
                    customClass="extra-spacer px-5 mb-5 last-section"
                />
                <ContactSection />
                <Footer />
            </>
        );
    }
}
