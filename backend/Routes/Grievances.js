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

module.exports = router; // Export the router for use in the app
