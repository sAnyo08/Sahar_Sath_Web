const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile"); // Import the Profile model

// Fetch all profiles
router.get('/profile', async (req, res) => {
    console.log("Sanyo is fetching profiles");
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch profiles' });
    }
});

// Fetch a profile by ID
router.get('/profile/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const profileByID = await Profile.findById(_id);

        if (!profileByID) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        res.status(200).json({
            name: profileByID.name,
            email: profileByID.email,
            phone: profileByID.phone,
        });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; // Export the router
