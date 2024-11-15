
import React from 'react';

const CardContainer = ({ solvedCount, pendingCount }) => {

    return (
        <div className="flex justify-center space-x-4 p-4">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-6 w-1/4">
                <h2 className="text-6xl font-semibold mb-2 text-white text-center">{solvedCount}</h2>

                <p className="text-white text-center text-3xl">Grievances Solved</p>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-6 w-1/4">
                <h2 className="text-6xl font-semibold mb-2 text-white text-center">{pendingCount}</h2>
                <p className="text-white text-center text-3xl">Grievances Pending</p>
            </div>

        </div>
    );
};

export default CardContainer;

