import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function GrievancePage() {
    const { grievanceId } = useParams();
    const [grievanceText, setGrievanceText] = useState('');
    const [grievanceName, setGrievanceName] = useState('');
    const [grievanceDepartment, setGrievanceDepartment] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        const fetchGrievanceDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/grievances/${grievanceId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch grievance details');
                }
                const data = await response.json();
                setGrievanceText(data.description || 'No grievance text available');
                setGrievanceName(data.title || '');
                setError(null);
            } catch (error) {
                setError('Unable to load grievance details. Please try again later.');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGrievanceDetails();
    }, [grievanceId]);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFiles = (newFiles) => {
        const updatedFiles = [...files];
        newFiles.forEach(file => {
            if (!files.some(existingFile => existingFile.name === file.name)) {
                updatedFiles.push(file);
            }
        });
        setFiles(updatedFiles);
    };

    const handleFileInput = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
    };

    const removeFile = (fileName) => {
        setFiles(files.filter(file => file.name !== fileName));
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-pulse flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
                    <span className="text-gray-600">Loading grievance details...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {error && (
                    <div role="alert" className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-red-700">{error}</span>
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left section */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h2 className="text-xl font-semibold text-gray-900" id="grievance-content">
                                        Grievance Content
                                    </h2>
                                </div>
                                <div
                                    className="bg-gray-50 p-6 rounded-lg text-gray-700 leading-relaxed"
                                    role="article"
                                    aria-labelledby="grievance-content"
                                >
                                    <div className="space-y-4">
                                        <p><strong>Subject:</strong> Grievance Submission: {grievanceName}</p>
                                        <p>Dear {grievanceDepartment || '[Department Name]'},</p>
                                        <p>{grievanceText}</p>
                                        <p>Thank you for your attention. I look forward to a prompt resolution.</p>
                                        <p>Yours sincerely,<br />{contactDetails || '[Your Name]'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* File Upload Section */}
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                <div className="space-y-4">
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                            }`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <input
                                            type="file"
                                            multiple
                                            onChange={handleFileInput}
                                            className="hidden"
                                            id="file-upload"
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer inline-flex items-center space-x-2"
                                        >
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <span className="text-sm text-gray-600">
                                                Drag and drop files here or <span className="text-blue-500">browse</span>
                                            </span>
                                        </label>
                                    </div>

                                    {/* File List */}
                                    {files.length > 0 && (
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium text-gray-700">Attached Files:</h3>
                                            <div className="space-y-2">
                                                {files.map((file, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            <span className="text-sm text-gray-600">{file.name}</span>
                                                            <span className="text-xs text-gray-400">({formatFileSize(file.size)})</span>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFile(file.name)}
                                                            className="text-red-500 hover:text-red-700"
                                                            aria-label={`Remove ${file.name}`}
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Form fields remain the same */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="grievanceName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Grievance Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="grievanceName"
                                        value={grievanceName}
                                        onChange={(e) => setGrievanceName(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Enter grievance title"
                                        aria-required="true"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                                        Department <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="department"
                                        value={grievanceDepartment}
                                        onChange={(e) => setGrievanceDepartment(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Select or enter department"
                                        aria-required="true"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactDetails" className="block text-sm font-medium text-gray-700 mb-1">
                                        Contact Information <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="contactDetails"
                                        value={contactDetails}
                                        onChange={(e) => setContactDetails(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        rows={4}
                                        placeholder="Enter contact details"
                                        aria-required="true"
                                    />
                                </div>

                                <button
                                    onClick={() => console.log('Forward Grievance clicked')}
                                    className="w-full px-6 py-2.5 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                                    aria-label="Forward grievance to department"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span>Forward Grievance</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}