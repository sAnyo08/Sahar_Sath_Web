import { useState, useEffect } from 'react'

export default function GrievancePage() {
    const [grievanceText, setGrievanceText] = useState('')
    const [grievanceName, setGrievanceName] = useState('')
    const [grievanceDepartment, setGrievanceDepartment] = useState('')
    const [contactDetails, setContactDetails] = useState('')

    useEffect(() => {
        // Placeholder function to fetch grievance text from database
        const fetchGrievanceText = async () => {
            // Replace this with actual API call
            const response = await fetch('/api/grievance-text')
            const data = await response.json()
            setGrievanceText(data.text)
        }

        fetchGrievanceText()
    }, [])

    const handleSummarize = () => {
        console.log('Summarize button clicked')
    }

    const handleForwardGrievance = () => {
        console.log('Forward Grievance button clicked')
    }

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 bg-gray-100">
            {/* Left side - wider */}
            <div className="w-full md:w-2/3 space-y-4">
                <div className="border rounded-lg shadow-md h-[calc(100vh-12rem)] p-5 bg-white border-gray-300">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Grievance Text</h2>
                    <div className="bg-gray-200 p-4 rounded-md h-[calc(100%-4rem)] overflow-auto text-gray-700 text-sm leading-relaxed">
                        {grievanceText || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
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
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter contact details"
                        rows={3}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleForwardGrievance}
                        className="w-1/2 bg-green-700 hover:bg-green-800 text-white py-2 rounded text-sm font-medium shadow-md transition-all duration-200"
                    >
                        Forward Grievance
                    </button>
                </div>
            </div>
        </div>



    )
}
