const express = require("express");
const router = express.Router();
const Grievance = require("../models/Grievances"); // Correct model import

// Define route to fetch grievances
router.get('/grievances', async (req, res) => {
    console.log("Sanyo is here")
    try {
        const grievances = await Grievance.find(); // Use Grievances instead of Grievance
        res.status(200).json(grievances);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch grievances' });
    }
});

router.get('/grievances/:slug', async (req, res) => {
    try {
        const { slug } = req.params;

        const grievanceByID = await Grievance.findById(slug);
        if (!grievanceByID) {
            return res.status(404).json({ error: 'Grievance not found' });
        }

        // Send response with userId and description
        res.status(200).json({
            description: grievanceByID.description,
            title: grievanceByID.title,

        });
    } catch (error) {
        console.error('Error fetching grievance:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router; // Export the router for use in the app
