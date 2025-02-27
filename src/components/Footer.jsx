import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-blue-900 text-white py-8 mt-auto">
            <div className="container mx-auto text-center text-sm">
                <ul className="footerLink flex flex-wrap justify-center space-x-4 mb-6">
                    <li><Link to="/land" className="no-underline">Home</Link></li>
                    <li><Link to="/en/sitemap" className="no-underline">Sitemap</Link></li>
                    <li><Link to="/faqs" className="no-underline">FAQs</Link></li>
                    <li><Link to="/en/downloads" className="no-underline">Downloads</Link></li>
                    <li><Link to="/help" className="no-underline">Help</Link></li>
                    <li><Link to="/disclaimer-and-policies" className="no-underline">Disclaimer & Policies</Link></li>
                    <li><Link to="/en/accessibility-statement" className="no-underline">Accessibility Statement</Link></li>
                </ul>

                <hr className="border-gray-500 mb-6" />

                <div className="copyRight text-center">
                    <p>An initiative to make the country more better than before</p>
                    <p>© 2025 Content Owned by Crce project group</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
