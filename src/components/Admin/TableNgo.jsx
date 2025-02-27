import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function GrievanceComponent() {
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [solvedCount, setSolvedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [filteredGrievances, setFilteredGrievances] = useState([]);
    const [uniqueTitles, setUniqueTitles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch grievances
                const grievanceResponse = await axios.get('http://localhost:5000/api/grievances');
                const grievancesData = grievanceResponse.data;
                // Fetch user profile data
                const profileResponse = await axios.get('http://localhost:5000/api/profile');
                const profiles = profileResponse.data; // Assuming an array of user profiles
                console.log(profiles)
                // Merge grievances with profile phone numbers
                const mergedGrievances = grievancesData.map(grievance => {
                    const userProfile = profiles.find(profile => profile._id.toString() === grievance.userId.toString());
                    return { ...grievance, phone: userProfile ? userProfile.phone : 'N/A' };
                });
                console.log("merged ", mergedGrievances)

                setGrievances(mergedGrievances);
                setFilteredGrievances(mergedGrievances);
                setLoading(false);

                // Compute solved and pending counts
                const solved = mergedGrievances.filter(grievance => grievance.status.toLowerCase() === 'resolved').length;
                const pending = mergedGrievances.filter(grievance => grievance.status.toLowerCase() === 'pending').length;
                setSolvedCount(solved);
                setPendingCount(pending);

                // Extract unique titles correctly
                const titles = [...new Set(mergedGrievances.map(grievance => grievance.title))];
                setUniqueTitles(titles);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle dropdown change
    const handleTitleChange = (e) => {
        const title = e.target.value;
        setSelectedTitle(title);

        // Ensure filtering is case-insensitive
        if (title === '') {
            setFilteredGrievances(grievances);
        } else {
            setFilteredGrievances(grievances.filter(grievance => grievance.title.toLowerCase() === title.toLowerCase()));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center space-x-4 p-4">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-6 w-1/4 text-center">
                    <h2 className="text-6xl font-semibold text-white">{solvedCount}</h2>
                    <p className="text-white text-3xl">Grievances Solved</p>
                </div>
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-6 w-1/4 text-center">
                    <h2 className="text-6xl font-semibold text-white">{pendingCount}</h2>
                    <p className="text-white text-3xl">Grievances Pending</p>
                </div>
            </div>

            {loading ? (
                <p className="text-center">Loading grievances...</p>
            ) : (
                <div className="container mx-auto my-8 px-4">
                    <div className="mb-4 text-center">
                        <label htmlFor="grievanceTitle" className="font-semibold text-gray-700 mr-2">Filter by Title:</label>
                        <select
                            id="grievanceTitle"
                            value={selectedTitle}
                            onChange={handleTitleChange}
                            className="px-4 py-2 border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Titles</option>
                            {uniqueTitles.length > 0 ? (
                                uniqueTitles.map((title, index) => (
                                    <option key={index} value={title}>
                                        {title}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No Titles Available</option>
                            )}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGrievances.map((grievance) => (
                            <div
                                key={grievance._id}
                                className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <h3 className="text-xl font-bold text-blue-800">{grievance.title}</h3>
                                <p className="mt-2 text-gray-700"><strong>Description:</strong> {grievance.description}</p>
                                <p className="mt-2 text-gray-700"><strong>Status:</strong> {grievance.status}</p>
                                <p className="mt-2 text-gray-700"><strong>Date/Time:</strong> {new Date(grievance.createdAt).toLocaleString()}</p>
                                <p className="mt-2 text-gray-700"><strong>Address:</strong> {grievance.address}</p>
                                <p className="mt-2 text-gray-700"><strong>Phone:</strong> {grievance.userId.phone}</p>
                                <div className="mt-4 text-center">
                                    <Link to={`/summarize/${grievance._id}`}>
                                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
