import React, { useState } from 'react';

function Faqs() {
    // Define state for managing the open FAQ index
    const [openIndex, setOpenIndex] = useState(null);

    // Array of FAQs data
    const faqs = [
        {
            question: "How do I file a grievance?",
            answer: "You can file a grievance by logging into your account and clicking on the 'File Grievance' button. Fill out the form with the required details and submit."
        },
        {
            question: "What is the response time for a grievance?",
            answer: "The response time for grievances is typically within 7-10 business days. However, urgent issues are prioritized."
        },
        {
            question: "Can I upload images along with my grievance?",
            answer: "Yes, you can upload images to support your grievance. The upload option will be available in the grievance filing form."
        },
        {
            question: "How do I check the status of my grievance?",
            answer: "You can check the status of your grievance by visiting the 'My Grievances' section in your profile."
        },
        {
            question: "Who reviews my grievance?",
            answer: "Your grievance will be reviewed by the relevant department. Depending on the nature of the grievance, it will be escalated to higher authorities if required."
        },
        {
            question: "What should I do if my grievance is not resolved in time?",
            answer: "If your grievance is not resolved within the specified time frame, you can escalate it by contacting the grievance office through the provided contact details."
        },
        {
            question: "Can I file an anonymous grievance?",
            answer: "Yes, anonymous grievances can be filed. However, providing your details helps us investigate the issue more efficiently."
        },
        {
            question: "Is there any fee for filing a grievance?",
            answer: "No, filing a grievance is completely free of charge. There are no hidden fees or charges involved."
        },
        {
            question: "Can I withdraw my grievance after submission?",
            answer: "Yes, you can withdraw your grievance at any time by visiting the 'My Grievances' section and selecting the 'Withdraw' option."
        },
        {
            question: "What should I do if I have additional evidence for my grievance?",
            answer: "You can update your grievance with additional evidence, including photos or documents, by visiting your grievance details page and uploading the files."
        },
        {
            question: "How can I contact the grievance office?",
            answer: "You can contact the grievance office via email or by calling the provided helpline number available on the portal's 'Contact Us' page."
        },
        {
            question: "Can I track multiple grievances at once?",
            answer: "Yes, you can track all your grievances in the 'My Grievances' section where you can view their status and updates."
        }
    ];

    // Toggle answer visibility based on the clicked question
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqs-container p-8">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <div className="faq-list space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item bg-gray-100 p-4 rounded-lg shadow-md">
                        <div
                            className="faq-question text-xl font-semibold cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer mt-2 text-gray-700">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
