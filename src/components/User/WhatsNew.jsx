import React from 'react';

export default function WhatsNew() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 z-10">
                <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">What’s New on the Grievance Portal</h1>
                <p className="text-gray-700 mb-8 text-center">
                    Welcome to the <span className="font-semibold text-blue-600">Government Grievance Portal</span>! Stay updated with the latest features, updates, and improvements designed to enhance your experience.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* New Features Card */}
                    <div className="bg-blue-50 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌟 New Features</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Real-Time Status Tracking:</strong> Track the status of your grievance in real-time with regular updates.</li>
                            <li><strong>Multi-Language Support:</strong> The portal supports languages like Hindi, Marathi, Tamil, Telugu, and more.</li>
                            <li><strong>Image-Based Grievance Submission:</strong> Upload photos of issues directly for faster grievance handling.</li>
                        </ul>
                    </div>

                    {/* Improvements Card */}
                    <div className="bg-green-50 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠 Improvements</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Faster Response Times:</strong> Grievances are acknowledged within 24 hours.</li>
                            <li><strong>User-Friendly Dashboard:</strong> Redesigned dashboard for smoother navigation and improved usability.</li>
                            <li><strong>Accessibility Enhancements:</strong> Design improvements for screen readers and high-contrast mode.</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Announcements Card */}
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📢 Announcements</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Grievance Resolution Metrics:</strong> Monthly reports on grievance resolution rates are now available.</li>
                            <li><strong>Helpline Support:</strong> Call our 24/7 support line at <a href="tel:1800XXXXXXX" className="text-blue-600">1800-XXX-XXXX</a>.</li>
                        </ul>
                    </div>

                    {/* Upcoming Updates Card */}
                    <div className="bg-purple-50 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📍 Upcoming Updates</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Mobile App Launch:</strong> A dedicated mobile app is coming soon for seamless grievance submission on the go.</li>
                            <li><strong>Integration with WhatsApp:</strong> Submit and track grievances directly via WhatsApp.</li>
                        </ul>
                    </div>
                </div>

                <footer className="mt-8 text-center">
                    <p className="text-gray-600">
                        For feedback or suggestions, please contact us at: <a href="mailto:support@govgrievances.in" className="text-blue-600">support@govgrievances.in</a>.
                    </p>
                </footer>
            </div>

            {/* Animated Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none">
                    <path d="M0 39C150 50 300 10 450 39C600 70 750 120 900 35C1050 -50 1200 80 1440 20" stroke="rgba(0, 123, 255, 0.2)" strokeWidth="3" strokeDasharray="5,5" />
                    <path d="M0 50C300 40 600 80 900 30C1200 -20 1500 50 1440 70" stroke="rgba(255, 87, 34, 0.2)" strokeWidth="3" strokeDasharray="5,5" />
                </svg>
            </div>
        </div>
    );
}
