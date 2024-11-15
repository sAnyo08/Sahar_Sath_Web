import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardContainer from '../User/Land';

export default function GrievanceComponent() {
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [solvedCount, setSolvedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState(''); // State for selected grievance title
    const [filteredGrievances, setFilteredGrievances] = useState([]);

    useEffect(() => {
        const fetchGrievances = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/grievances');
                const fetchedGrievances = response.data;
                setGrievances(fetchedGrievances);
                setFilteredGrievances(fetchedGrievances);
                setLoading(false);

                // Calculate solved and pending counts based on grievance status
                const solved = fetchedGrievances.filter(grievance => grievance.status.toLowerCase() === 'resolved').length;
                const pending = fetchedGrievances.filter(grievance => grievance.status.toLowerCase() === 'pending').length;

                setSolvedCount(solved);
                setPendingCount(pending);
            } catch (error) {
                console.error('Error fetching grievances:', error);
                setLoading(false);
            }
        };

        fetchGrievances();
    }, []);

    // Handle dropdown change
    const handleTitleChange = (e) => {
        const title = e.target.value;
        setSelectedTitle(title);

        if (title === '') {
            setFilteredGrievances(grievances);
        } else {
            setFilteredGrievances(grievances.filter(grievance => grievance.title === title));
        }
    };

    // Get unique grievance titles for the dropdown
    const uniqueTitles = [...new Set(grievances.map(grievance => grievance.title))];

    return (
        <div>
            {/* Pass the counts to CardContainer as props */}
            <CardContainer pendingCount={pendingCount} solvedCount={solvedCount} />

            {loading ? (
                <p className="text-center">Loading grievances...</p>
            ) : (
                <div className="container mx-auto my-8 px-4 relative z-10">
                    {/* Dropdown to filter grievances by title */}
                    <div className="mb-4">
                        <label htmlFor="grievanceTitle" className="font-semibold text-gray-700 mr-2">Filter by Title: </label>
                        <select
                            id="grievanceTitle"
                            value={selectedTitle}
                            onChange={handleTitleChange}
                            className="px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">All Titles</option>
                            {uniqueTitles.map((title, index) => (
                                <option key={index} value={title}>
                                    {title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-blue-800 text-white">
                                    <th className="py-3 px-4 text-left border-r border-gray-300 font-semibold">Title</th>
                                    <th className="py-3 px-4 text-left border-r border-gray-300 font-semibold">Description</th>
                                    <th className="py-3 px-4 text-left border-r border-gray-300 font-semibold">Status</th>
                                    <th className="py-3 px-4 text-left border-r border-gray-300 font-semibold">Date/Time</th>
                                    <th className="py-3 px-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredGrievances.map((grievance) => (
                                    <tr key={`${grievance.userId}-${grievance.createdAt}`} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-4 border-r border-gray-300">{grievance.title}</td>
                                        <td className="py-3 px-4 border-r border-gray-300">{grievance.description}</td>
                                        <td className="py-3 px-4 border-r border-gray-300">{grievance.status}</td>
                                        <td className="py-3 px-4 border-r border-gray-300">{new Date(grievance.createdAt).toLocaleString()}</td>
                                        <td className="py-3 px-4 text-center">
                                            <Link to='/summarize'>
                                                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded transition duration-300">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
