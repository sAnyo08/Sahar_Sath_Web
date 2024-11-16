import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About the Government Grievance Portal</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-lg text-gray-600">
                    The Government Grievance Portal is a platform designed to streamline the process for citizens
                    to report issues and grievances regarding public services, infrastructure, and various
                    government-related concerns. It aims to ensure transparency, accountability, and quick resolution
                    of issues raised by the public.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                    Our mission is to empower citizens by providing them with an easy-to-use platform for voicing their concerns
                    and ensuring those grievances are addressed by relevant authorities. Through this portal, we strive to
                    foster a transparent and responsive governance system that benefits everyone.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
                <p className="text-lg text-gray-600">
                    Citizens can submit their grievances by uploading images, providing descriptions, and categorizing
                    the issue (e.g., public health, infrastructure, utilities). Once submitted, the grievance is
                    automatically forwarded to the concerned department for resolution. The portal ensures that all
                    issues are tracked and updates are provided to the users.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600">
                    If you have any questions or require assistance, please feel free to contact us via our support
                    center or send us an email at support@grievanceportal.gov.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
