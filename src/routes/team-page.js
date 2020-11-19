import React from 'react';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import ProfilePreview from '../components/profile-preview';
import SubMenu from '../components/sub-menu';
import TopMenu from '../components/top-menu';
import TopSection from '../components/top-section';
import sampleImg from '../assets/patient-smiling.jpeg';

export default class TeamPage extends React.Component {
    render() {
        return (
            <>
                <TopMenu />
                <SubMenu />
                <TopSection
                    headerCopy="Team"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    infoImageSource={sampleImg}
                    customClass="px-5"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ProfilePreview
                    infoImageSource={sampleImg}
                    headerCopy="Dr. Random"
                    bodyCopy="Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    buttonCopy="Learn More"
                />
                <ContactSection />
                <Footer />
            </>
        );
    }
}
