import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function GrievancePage() {
    const { grievanceId } = useParams(); // Get grievance ID from URL
    const [grievanceText, setGrievanceText] = useState('');
    const [grievanceName, setGrievanceName] = useState('');
    const [grievanceDepartment, setGrievanceDepartment] = useState('');
    const [contactDetails, setContactDetails] = useState('');

    useEffect(() => {
        // Fetch grievance details based on the grievanceId

        const fetchGrievanceDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/grievances/${grievanceId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch grievance details');
                }
                const data = await response.json();

                // Log data to verify content
                console.log('Fetched grievance data:', data);

                // Set grievance fields
                setGrievanceText(data.description || 'No grievance text available'); // Use title as grievance text
                setGrievanceName(data.title || '');

            } catch (error) {
                console.error('Error fetching grievance details:', error);
            }
        };

        fetchGrievanceDetails();
    }, [grievanceId]); // Re-fetch if grievanceId changes

    const handleSummarize = () => {
        console.log('Summarize button clicked');
    };

    const handleForwardGrievance = () => {
        console.log('Forward Grievance button clicked');
    };

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 bg-gray-100">
            {/* Left side - wider */}
            <div className="w-full md:w-2/3 space-y-4">
                <div className="border rounded-lg shadow-md h-[calc(100vh-12rem)] p-5 bg-white border-gray-300">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Grievance Text</h2>
                    <div className="bg-gray-200 p-4 rounded-md h-[calc(100%-4rem)] overflow-auto text-gray-700 text-sm leading-relaxed">
                        {grievanceText || "Loading grievance text..."}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleSummarize}
                        className="w-1/2 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded text-sm font-medium shadow-md transition-all duration-200"
                    >
                        Summarize
                    </button>
                </div>
            </div>

            {/* Right side - narrower */}
            <div className="w-full md:w-1/3 space-y-4">
                <div className="border rounded-lg shadow-md p-5 bg-white border-gray-300">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Grievance Name</h3>
                    <input
                        type="text"
                        value={grievanceName}
                        onChange={(e) => setGrievanceName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter grievance name"
                    />
                </div>

                <div className="border rounded-lg shadow-md p-5 bg-white border-gray-300">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Grievance Department</h3>
                    <input
                        type="text"
                        value={grievanceDepartment}
                        onChange={(e) => setGrievanceDepartment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter department"
                    />
                </div>

                <div className="border rounded-lg shadow-md p-5 bg-white border-gray-300">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Contact Details</h3>
                    <textarea
                        value={contactDetails}
                        onChange={(e) => setContactDetails(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 h-28"
                        placeholder="Enter contact details"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleForwardGrievance}
                        className="w-1/2 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded text-sm font-medium shadow-md transition-all duration-200"
                    >
                        Forward Grievance
                    </button>
                </div>
            </div>
        </div>
    );
}