import React from 'react';

export default function WhatsNew() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-blue-800 mb-4">What’s New on the Grievance Portal</h1>
                <p className="text-gray-700 mb-6">
                    Welcome to the <span className="font-semibold">Government Grievance Portal</span>! Stay updated with the latest features, updates, and improvements designed to enhance your experience.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">🌟 New Features</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Real-Time Status Tracking:</strong> Track the status of your grievance in real-time with regular updates directly to your registered email or phone.
                        </li>
                        <li>
                            <strong>Multi-Language Support:</strong> The portal now supports multiple languages including Hindi, Marathi, Tamil, Telugu, and more.
                        </li>
                        <li>
                            <strong>Image-Based Grievance Submission:</strong> Upload photos of issues directly, with AI-powered categorization for faster grievance handling.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">🛠 Improvements</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Faster Response Times:</strong> Enhanced processing system ensures grievances are acknowledged within 24 hours.
                        </li>
                        <li>
                            <strong>User-Friendly Dashboard:</strong> Redesigned dashboard for smoother navigation and improved usability.
                        </li>
                        <li>
                            <strong>Accessibility Enhancements:</strong> Improved design for screen readers and support for high-contrast mode.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">📢 Announcements</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Grievance Resolution Metrics:</strong> Monthly reports on grievance resolution rates and success stories are now available.
                        </li>
                        <li>
                            <strong>Helpline Support:</strong> Call our 24/7 support line at <a href="tel:1800XXXXXXX" className="text-blue-600">1800-XXX-XXXX</a> for assistance.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">📍 Upcoming Updates</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Mobile App Launch:</strong> A dedicated mobile app is coming soon for seamless grievance submission on the go.
                        </li>
                        <li>
                            <strong>Integration with WhatsApp:</strong> Submit and track grievances directly via WhatsApp.
                        </li>
                    </ul>
                </section>

                <footer className="mt-6">
                    <p className="text-gray-600">
                        For feedback or suggestions, please contact us at: <a href="mailto:support@govgrievances.in" className="text-blue-600">support@govgrievances.in</a>.
                    </p>
                </footer>
            </div>
        </div>
    );
}
